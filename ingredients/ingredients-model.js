const db = require('../data/dbConfig.js');

module.exports = {
    getRFI
}

function getRFI(ingredient_id) {
    return db('recipes')
        .join('instructions', 'recipes.id', '=', 'instructions.recipe_id')
        .select('recipes.recipe')
        .where({ ingredient_id: ingredient_id });
}

