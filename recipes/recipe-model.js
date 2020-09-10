const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    db('recipes');
}

function getShippingList(recipe_id) {
    db('ingredients').where({ recipe_id: recipe_id });
}

function getInstructions(recipe_id) {
    db('instructions').where({ recipe_id: recipe_id });
}