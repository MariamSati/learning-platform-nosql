// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse :  Pour centraliser la gestion des connexions, faciliter la maintenance, réutiliser le code et garantir une meilleure gestion des erreurs.
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse : Pour gérer proprement la fermeture des connexions, utilisez des gestionnaires d'événements ou des hooks (comme process.on('SIGINT')) pour fermer les connexions à la base de données et libérer les ressources avant que l'application ne se termine.

const { MongoClient } = require('mongodb');
const redis = require('redis');
const config = require('./env');

let mongoClient, redisClient, db;

async function connectMongo() {
  // TODO: Implémenter la connexion MongoDB
  // Gérer les erreurs et les retries
  try {
    mongoClient = new MongoClient(config.mongodb.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongoClient.connect();
    db = mongoClient.db(config.mongodb.dbName);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit on failure
  }
}

async function connectRedis() {
  // TODO: Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  try {
    redisClient = redis.createClient({
      url: config.redis.uri,
    });
    redisClient.on('error', (error) => {
      console.error('Redis connection error:', error);
    });
    await redisClient.connect();
    console.log('Redis connected successfully!');
  } catch (error) {
    console.error('Error connecting to Redis:', error);
    process.exit(1); // Exit on failure
  }
}

// Export des fonctions et clients
function closeConnections() {
  if (mongoClient) {
    mongoClient.close().then(() => console.log('MongoDB connection closed.'));
  }
  if (redisClient) {
    redisClient.quit().then(() => console.log('Redis connection closed.'));
  }
}
// Handle process termination
process.on('SIGINT', () => {
  closeConnections();
  process.exit(0);
});
process.on('SIGTERM', () => {
  closeConnections();
  process.exit(0);
});
// Export connections and database
module.exports = {
  // TODO: Exporter les clients et fonctions utiles
  connectMongo,
  connectRedis,
  getMongoDb: () => db,
  getRedisClient: () => redisClient,
};