# Shopify Frontend Internship Challenge 2021

> My name is Remy Orans, I'm a full stack developer from Oakland, California. This is my submission for the Shopify Frontend Internship Challenge 2021.

## Table of Contents
1. [Motivation](#Demo)
1. [Demo](#Demo)
1. [Tech](#Tech)
1. [Features](#Features)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Installing Dependencies](#installing-dependencies)

## Motivation
> I created this for Shopify's Frontend Internship Challenge 2021. Given the time constraint, I focused on quality rather than quantity of features. My goals for the project were to create a simple, responsive design that featured clear separation of concerns and an intuitive data flow. In addition to the basic requirements, I implemented a RESTful API server using the Express framework, and persisted the nominations using MongoDB.
## Demo
![The Shoppies](http://54.187.110.54/)

## Tech
* Front End
  * React
  * Material UI
  * Webpack
* Backend
  * MongoDB
  * Express
* Testing/Deployment
  * Jest
  * Enzyme
  * Docker
  * AWS EC2


## Features
* Mobile first responsive UI built using Material UI and React consists of debounced live search to query the OMDB API, as well as search results and nomination lists
* Utilized React's composition model to keep code DRY in implementing search results and nomination lists, which are both specific versions of the movie list component
* Implemented integration test suite using Jest, Enzyme, and Supertest with a focus on creating non brittle, deterministic tests

## Usage

> Use webpack to create bundled javascript code for client side rendering by running in terminal: 
  npm run react-dev
> Start local server by running in terminal: 
  npm start

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

