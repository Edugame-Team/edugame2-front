# edugame2-front
Frontend du projet Edugame2

![Work in progress](http://www.repostatus.org/badges/latest/wip.svg)

## Status

| Language | Action | Coveralls |
|:--------:|:------:|:---------:|
| ![GitHub top language](https://img.shields.io/github/languages/top/Edugame-Team/edugame2-front) | ![](https://img.shields.io/github/workflow/status/Edugame-Team/edugame2-front/CICD/master) | ![](https://img.shields.io/github/workflow/status/Edugame-Team/edugame2-front/CICD/blabla) |

## Sommaire

- [Description](#description)
- [Prérequis](#prérequis)
- [Installation (avec docker)](#installation-avec-docker)
- [Installation (sans docker)](#installation-sans-docker)
- [Auteurs](#auteurs)
- [Licence](#licence)

## Description

Partie frontend du projet Edugame. Développé en react-native, il permet d'être lancé sur navigateur et d'être transformer en application mobile compatible android et IOS. 

## Prérequis

 - [Node.js](https://nodejs.org/en/) est nécessaire si le projet est lancé sans docker.
 - [Yarn](https://classic.yarnpkg.com/fr/docs/install/#windows-stable) est le gestionnaire de dépendances utilisé dans ce projet.
 - [Docker](https://docs.docker.com/get-docker/) Docker pour lancer le projet (Un dockerfile + docker-compose sont disponibles).
 
 ## Installation (avec docker)
 
  - **docker-compose up** en étant dans le dossier du projet. L'application sera disponible sur le port 80.

## Installation (sans docker)

 - **yarn install** afin d'installer les dépendances nécessaires du projet.
 - **yarn web** pour lancer l'application sur une vue web.

## Running the tests

Pour lancer les tests :

```bash
yarn test
```

## Auteurs

* **Fahim BENCHAABANE** - <fahim.benchaabane@epitech.eu> - [fahimbench](https://github.com/fahimbench)
* **Arnaud Heymans** - <arnaud.heymans@epitech.eu> - [Barhal](https://github.com/Barhal)
* **Thomas Lopez** - <thomas.lopez@epitech.eu> - [LT-code](https://github.com/LT-code)

## Licence
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)




