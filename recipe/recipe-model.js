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
    db('recipes')
        .join('quantity', 'quantity.recipe_id', '=', 'recipes.id')
        .join('ingredients', 'ingredients.recipe_id', '=', 'recipes.id')
        .select('quantity.amount', 'ingredients.ingredient')
        .where({ id: recipe_id })
            .then(dbRes => {
                res.status(200).json({ dbRes });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    message: error.message
                });
            });
}

function getInstructions(recipe_id) {
    db('steps')
        .where({ recipe_id: recipe_id })
        .then(dbRes => {
            res.status(200).json({ dbRes });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        });
}