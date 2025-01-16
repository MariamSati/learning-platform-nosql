// Question: Comment organiser le point d'entrée de l'application ?
//Le point d'entrée de l'application doit être un fichier principal (ex. app.js ou server.js) qui configure les middlewares, connecte la base de données, définit les routes, et démarre le serveur.
// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
//La meilleure façon de gérer le démarrage de l'application est d'utiliser un fichier principal qui initialise la configuration, connecte la base de données et démarre le serveur de manière centralisée avec une gestion des erreurs robuste.

const express = require('express');
const config = require('./config/env');
const db = require('./config/db');

const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');
//const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = config.port;

async function startServer() {
  try {
    // TODO: Initialiser les connexions aux bases de données
    // TODO: Configurer les middlewares Express
    // TODO: Monter les routes
    // TODO: Démarrer le serveur
        // Initialiser les connexions aux bases de données
        console.log('Connecting to MongoDB...');
        await db.connectMongo();
        console.log('MongoDB connected successfully.');
        console.log('Connecting to Redis...');
        await db.connectRedis();
        console.log('Redis connected successfully.');
        // Configurer les middlewares Express
        app.use(express.json()); // Pour parser le JSON dans les requêtes
        app.use(express.urlencoded({ extended: true })); // Pour parser les données encodées en URL
        // Monter les routes
        app.use('/api/courses', courseRoutes);
        //app.use('/api/students', studentRoutes);
        // Gérer les erreurs 404
        app.use((req, res, next) => {
          res.status(404).json({ message: 'Route not found' });
        });
        // Démarrer le serveur
        app.listen(PORT, () => {
          console.log(`Server is running on http://localhost:${PORT}`);
        });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on('SIGTERM', async () => {
  // TODO: Implémenter la fermeture propre des connexions
  try {
    console.log('Shutting down gracefully...');
    await db.disconnectMongo();
    await db.disconnectRedis();
    console.log('All connections closed. Exiting now.');
    process.exit(0);
  } catch (error) {
    console.error('Error during shutdown:', error);
    process.exit(1);
  }
});

// Lancer le serveur
startServer();