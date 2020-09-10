const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('../recipes/recipe-router.js');
const ingredientsRouter = require('../ingredients/ingredients-router.js');

const server = express();

sever.use(helmet());
server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientsRouter);

module.exports = server;