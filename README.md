# Système de Gestion des Étudiants avec SpringBoot et Angular
Ce repository contient un projet de gestion d'étudiants développé avec Spring Boot pour le backend et Angular pour le frontend. Il offre des fonctionnalités telles que l'ajout, la modification, la suppression et la visualisation des informations des étudiants, avec une interface utilisateur conviviale et des fonctionnalités CRUD complètes.

# <img src="https://raw.githubusercontent.com/spring-projects/spring-framework/main/framework-docs/src/docs/spring-framework.png" width="80" height="80"> Spring Boot [![Build Status](https://github.com/spring-projects/spring-framework/actions/workflows/build-and-deploy-snapshot.yml/badge.svg?branch=main)](https://github.com/spring-projects/spring-framework/actions/workflows/build-and-deploy-snapshot.yml?query=branch%3Amain) [![Revved up by Develocity](https://img.shields.io/badge/Revved%20up%20by-Develocity-06A0CE?logo=Gradle&labelColor=02303A)](https://ge.spring.io/scans?search.rootProjectNames=spring)


# <img src="https://brandslogos.com/wp-content/uploads/images/large/angular-logo.png" alt="Angular Logo" height="80" /> Angular [![Build Status](https://github.com/spring-projects/spring-framework/actions/workflows/build-and-deploy-snapshot.yml/badge.svg?branch=main)](https://github.com/spring-projects/spring-framework/actions/workflows/build-and-deploy-snapshot.yml?query=branch%3Amain) [![Revved up by Develocity](https://img.shields.io/badge/Revved%20up%20by-Develocity-06A0CE?logo=Gradle&labelColor=02303A)](https://ge.spring.io/scans?search.rootProjectNames=spring)

## Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation et Configuration](#installation-et-configuration)
- [Usage](#usage)
- [Documentation](#Documentation)
- [Auteurs](#auteurs)

## Fonctionnalités

- **Visualiser les Étudiants :** Affichage d'une liste de tous les étudiants dans le système en utilisant une page JSP. Chaque entrée d'étudiant montre des informations de base telles que le nom, le numéro de matricule et l'e-mail.

- **Ajouter un Nouvel Étudiant :** Formulaire pour permettre aux administrateurs d'ajouter un nouvel étudiant au système. Validation des données pour garantir que les champs obligatoires sont remplis et que les formats de données appropriés sont utilisés.

- **Mettre à Jour les Détails de l'Étudiant :** Possibilité de modifier les détails d'un étudiant existant, y compris le nom, le numéro de matricule, l'e-mail, le numéro de téléphone et l'adresse.

- **Supprimer un Étudiant :** Option pour supprimer un étudiant du système.

- **Rechercher des étudiants :** Option de rechercher des étudiants

- **Trier la listes des étudiants :** Option de trier les étudiants par ordre croissant ou décroissant

## Technologies Utilisées (Backend)

- Java 17
- Spring Boot 3.2.5
- Spring Data JPA
- MySQL Connector
- Lombok
- SpringDoc OpenAPI (Swagger ui) v3
- Maven

## Technologies Utilisées (Frontend)

- Angular CLI 17.3.7
- Node.js 20.8.0
- npm 7.5.8
- TypeScript 5.4.5

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Java JDK 17
- Node.js 20.8.0
- npm 7.5.8
- MySQL Server

## Installation et Configuration

- Clonez ce dépôt sur votre machine locale.
  
#### Backend (Spring Boot)

1. Importez le projet dans votre IDE.
2. Configurez votre base de données MySQL en créant une nouvelle base de données nommée `student_db`.
3. Modifiez le fichier `application.properties` dans `src/main/resources` pour correspondre à votre configuration MySQL.

### Exemple de configuration :

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_db?serverTimezone=UTC
spring.datasource.username=votre_nom_utilisateur_mysql
spring.datasource.password=votre_mot_de_passe_mysql
````
Lancez le projet en utilisant votre IDE ou en construisant le projet avec Maven et en le déployant sur un serveur Tomcat.

#### Frontend (Angular)

1. Assurez-vous d'avoir Node.js et Angular CLI installés sur votre machine.
2. Naviguez vers le répertoire frontend.
3. Exécutez `npm install` pour installer les dépendances.
4. Lancez l'application avec `ng serve`.

## Usage

Pour accéder à Swagger UI pour votre API backend à l'URL http://localhost:8080/swagger-ui.html et à votre application Angular à l'URL http://localhost:4200, voici les étapes :

### Accès à Swagger UI pour l'API Backend :

- Assurez-vous que votre application backend est en cours d'exécution sur le port 8080.
- Ouvrez votre navigateur et allez à l'URL (http://localhost:8080/swagger-ui.html). Cela ouvrira l'interface Swagger UI où vous pouvez explorer et tester votre API.

### Accès à votre Application Angular :

- Assurez-vous que votre application Angular est en cours d'exécution sur le port 4200.
- Ouvrez un autre onglet ou une autre fenêtre de votre navigateur et allez à l'URL http://localhost:4200. Vous devriez voir votre application Angular se charger, prête à être utilisée.

### Documentation de l'API (SpringDoc OpenAPI)

Nous utilisons SpringDoc OpenAPI pour générer automatiquement une documentation complète de nos API RESTful, conforme à la spécification OpenAPI 3 pour Spring Boot. Voici les fonctionnalités clés de notre documentation :

- **Automatisation:** SpringDoc OpenAPI génère automatiquement une documentation détaillée de nos API à partir de nos contrôleurs Spring MVC, en utilisant les annotations OpenAPI.

- **Conformité OpenAPI 3:** La documentation est conforme à la spécification OpenAPI 3, offrant une description claire et structurée de nos endpoints, paramètres, réponses, schémas de données, etc.

- **Annotations Spécifiques:** Nous utilisons des annotations comme @Operation, @Parameter, @ApiResponse, @RequestBody, etc., pour enrichir la documentation avec des détails précis sur chaque endpoint.

- **Interface Interactive (Swagger UI):** SpringDoc OpenAPI fournit une interface utilisateur interactive (Swagger UI) pour explorer facilement la documentation, tester les API directement et visualiser les réponses en temps réel.


## Auteurs
Ce projet a été développé par Yassine OULARBI pour l'école ENAA.
Contact : yassineoularbi4@gmail.com

---


#### (Backend)

![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) ![Spring Data JPA](https://img.shields.io/badge/Spring%20Data%20JPA-6DB33F?style=for-the-badge&logo=spring-data&logoColor=white) ![MySQL Connector](https://img.shields.io/badge/MySQL%20Connector-4479A1?style=for-the-badge&logo=mysql&logoColor=white) ![Lombok](https://img.shields.io/badge/Lombok-BC4E9C?style=for-the-badge&logo=lombok&logoColor=white) ![SpringDoc OpenAPI](https://img.shields.io/badge/SpringDoc%20OpenAPI-F99D25?style=for-the-badge&logo=swagger&logoColor=white) ![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)

#### (Frontend)

![Angular CLI](https://img.shields.io/badge/Angular%20CLI-DD0031?style=for-the-badge&logo=angular&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

