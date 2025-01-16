# Learning Platform Project

Ce projet est une plateforme d'apprentissage qui utilise MongoDB, Redis et Node.js pour gérer les cours.

---

## 🛠️ Installation et lancement du projet

### Prérequis
- **Node.js** version 14 ou supérieure
- **MongoDB** et **Redis** installés localement ou accessibles via une URI distante

### Étapes d'installation

#### Création de votre dépôt :
1. Sur [GitHub](https://github.com)
2. Créez un nouveau dépôt public nommé **learning-platform-nosql**
3. Ne l'initialisez pas avec un README

#### Configuration de l'environnement local :

```bash
# Clonez mon dépôt template
git clone https://github.com/chaymaAitB/learning-platform-template

# Renommez le dépôt origin
cd learning-platform-template
git remote remove origin

# Ajoutez votre dépôt comme nouvelle origine
git remote add origin https://github.com/[votre-compte]/learning-platform-nosql

# Poussez le code vers votre dépôt
git push -u origin main
```

#### Installation des dépendances :
```bash
npm install
```

---

## 📂 Structure du projet

```plaintext
📂 learning-platform
├── 📁 config          # Fichiers de configuration pour MongoDB, Redis, etc.
│   ├── db.js          # Connexions à MongoDB et Redis
│   └── env.js         # Chargement des variables d'environnement
├── 📁 controllers     # Logique métier des API
│   └── courseController.js  # Contrôleurs pour les opérations sur les cours
├── 📁 routes          # Définition des routes de l'API
│   └── courseRoutes.js       # Routes pour les opérations sur les cours
├── 📁 services        # Services pour interagir avec MongoDB et Redis
│   ├── mongoService.js       # Fonctions MongoDB
│   └── redisService.js       # Fonctions Redis
├── 📁 models          # Modèles pour MongoDB (à ajouter si nécessaire)
├── 📄 package.json     # Dépendances et scripts
├── 📄 package-lock.json # Verrouillage des versions des dépendances
├── 📄 .env.example     # Exemple de fichier d'environnement
├── 📄 README.md        # Documentation du projet
└── 📄 app.js        # Point d'entrée de l'application
```

---

## ✨ Choix techniques

### MongoDB :
- Utilisé pour stocker les cours de manière structurée.
- **Avantages** : Scalabilité et support des requêtes complexes.

### Redis :
- Utilisé pour la mise en cache des cours pour améliorer les performances.
- **Avantages** : Faible latence pour les données fréquemment consultées.

### Node.js avec Express :
- Permet une configuration rapide et flexible des APIs RESTful.

### Postman :
- Utilisé pour tester les APIs en local de manière rapide et efficace.
- **Avantages** : Interface graphique intuitive, possibilité d'automatiser les tests d'API.

### Architecture :
- Basée sur une séparation claire entre les routes, les contrôleurs, et les services pour un code maintenable.

---

## 📚 Documentation 

*Demonstration* :
![Créer un cours](post-course.JPG)

### Lister les cours
*GET* /api/courses

*Demonstration* :
![Lister les cours](get-courses.JPG)

### Consulter un cours
*GET* /api/courses/:id

*Demonstration* :
![Consulter un cours](get-course.JPG)

### Supprimer un cours
*DELETE* /api/courses/:id

*Demonstration* :
![Consulter un cours](deleteCourse.JPG)



