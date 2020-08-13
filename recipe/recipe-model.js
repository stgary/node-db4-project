const db = require("../data/dbConfig.js");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return (
     db('recipes')
        .join('quantity', 'quantity.ingredient_id', '=', 'ingredients.id')
        .join('ingredients', 'ingredients.recipe_id', '=', 'recipes.id')
        .select('quantity.amount', 'ingredients.ingredient')
        .where({ id: recipe_id })
    );
}

function getInstructions(recipe_id) {
    return db('steps').where({ recipe_id: recipe_id });
}