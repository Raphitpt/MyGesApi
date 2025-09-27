# GES API Client

Un client TypeScript moderne et organisé pour l'API GES (Kordis).

## 🙏 Remerciements

Ce projet s'inspire du travail de [quantumsheep/myges-cli](https://github.com/quantumsheep/myges-cli). Merci pour l'exploration initiale de l'API GES !

## 🚀 Installation

```bash
npm install
```

## 🏗️ Build

```bash
npm run build
```

## 📖 Utilisation

```typescript
import { GesAPI, ProfileService, TimetableService, ProjectService } from './src';

// Connexion pour récupérer le token
const token = await GesAPI.login('username', 'password');

// Utilisation des services avec le token
const profile = await ProfileService.getProfile(token);
const years = await ProfileService.getYears(token);
const absences = await ProfileService.getAbsences(token, '2024');
const grades = await ProfileService.getGrades(token, '2024');

// Agenda
const start = new Date();
const end = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Semaine suivante
const timetable = await TimetableService.getTimetable(token, start, end);

// Projets
const projects = await ProjectService.getProjects(token, '2024');
const project = await ProjectService.getProject(token, 'project-id');
const nextSteps = await ProjectService.getNextProjectSteps(token);
```

## 📁 Structure du projet

```
src/
├── interfaces/           # Interfaces TypeScript
│   ├── timetable.ts
│   └── project.ts
├── types/               # Types généraux
│   └── auth.ts
├── services/            # Services organisés par domaine
│   ├── base.ts             # Service de base
│   ├── auth.ts             # Authentification
│   ├── profile.ts          # Profil utilisateur
│   ├── timetable.ts        # Emploi du temps
│   └── project.ts          # Projets
├── ges-api.ts           # Client principal
└── index.ts            # Point d'entrée
```

## 🎯 Fonctionnalités

### 🔐 Authentification
- Login avec identifiants
- Gestion des tokens OAuth

### 👤 Profil
- Récupération du profil utilisateur
- Années disponibles
- Absences, notes, cours

### 📅 Emploi du temps
- Récupération des événements de l'emploi du temps
- Filtrage par dates

### 📝 Projets
- Liste des projets
- Détails d'un projet
- Gestion des groupes de projet
- Messages des groupes
- Étapes de projet

## 🛠️ Scripts disponibles

- `npm run build` - Compile le projet

## 📦 Export

Le projet exporte tout ce dont vous avez besoin :
- Le client principal `GesAPI` pour l'authentification
- Tous les types et interfaces
- Les services individuels (ProfileService, TimetableService, ProjectService)

## 🔧 Architecture

Le projet utilise une architecture fonctionnelle avec des services statiques :
- **Services statiques** : Chaque fonction prend le token en paramètre
- **Indépendance** : Pas de gestion d'état, facilite l'intégration dans d'autres services
- **Simplicité** : Authentification séparée des appels API
- **Flexibilité** : Permet l'utilisation avec différents systèmes de gestion de tokens

### Avantages de cette approche
- **Intégration facile** : Compatible avec tous les frameworks et architectures
- **Pas de singleton** : Évite les problèmes de state management
- **Testabilité** : Chaque fonction est pure et testable indépendamment
- **Performance** : Pas d'instanciation d'objets nécessaire