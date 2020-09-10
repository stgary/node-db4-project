const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('../routers/recipe-router.js');
const ingredientsRouter = require('../routers/ingredients-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientsRouter);

module.exports = server;