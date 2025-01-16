// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : Pour gérer efficacement le cache avec Redis, configurez des clés avec des durées d'expiration appropriées, utilisez des stratégies d'éviction adaptées (comme LRU), et organisez les données en évitant les redondances.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Utilisez des clés descriptives, structurées avec des délimiteurs comme : (e.g., user:123:profile), évitez les clés trop longues, et appliquez des stratégies d'expiration si nécessaire pour gérer la mémoire efficacement.

// Fonctions utilitaires pour Redis
const redis = require('redis');
const config = require('../config/env');
let redisClient;
/**
 * Initialize Redis client and connect to the Redis server.
 */
async function connectRedis() {
  redisClient = redis.createClient({ url: config.redis.uri });
  redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
  });
  await redisClient.connect();
  console.log('Connected to Redis');
}
/**
 * Cache data in Redis with a specified TTL.
 * @param {string} key - The Redis key.
 * @param {any} data - The data to cache (will be stringified).
 * @param {number} ttl - Time-to-live in seconds.
 */
async function cacheData(key, data, ttl) {
    // TODO: Implémenter une fonction générique de cache
    try {
      const serializedData = JSON.stringify(data);
      await redisClient.set(key, serializedData, { EX: ttl });
      console.log(`Cached data for key: ${key}`);
    } catch (error) {
      console.error(`Failed to cache data for key: ${key}`, error);
    }
  }
  /**
   * Retrieve cached data from Redis.
   * @param {string} key - The Redis key.
   * @returns {Promise<any>} - The cached data or null if the key doesn't exist.
   */
  async function getCachedData(key) {
    try {
      const data = await redisClient.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Failed to retrieve data for key: ${key}`, error);
      return null;
    }
  }
  /**
   * Delete cached data by key.
   * @param {string} key - The Redis key to delete.
   */
  async function deleteCache(key) {
    try {
      await redisClient.del(key);
      console.log(`Deleted cache for key: ${key}`);
    } catch (error) {
      console.error(`Failed to delete cache for key: ${key}`, error);
  }
  
  module.exports = {
    // TODO: Exporter les fonctions utilitaires
  };