// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : Pour améliorer la lisibilité, la modularité et la maintenabilité du code en organisant chaque groupe de routes par fonctionnalité ou domaine logique.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: Organiser les routes par fonctionnalités dans des fichiers séparés dans un dossier routes, en utilisant un routeur Express pour chaque fonctionnalité, puis importer-les dans le fichier principal pour les regrouper.

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes pour les cours
router.post('/', courseController.createCourse);
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourse);
router.get('/stats', courseController.getCourseStats);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;