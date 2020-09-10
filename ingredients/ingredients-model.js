const db = require('../data/dbConfig.js');

module.exports = {
    getRFI
}

function getRFI(ingredient_id) {
    db('ingredients')
        .join('recipes', 'recipes.id', 'ingredients.recipe_id')
        .select('recipe.recipe')
        .where({ ingredients_id: ingredients_id });
}

