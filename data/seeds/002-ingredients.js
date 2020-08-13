
exports.seed = function(knex, Promise) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, recipe_id: 1, ingredient: 'cups All Purpose Flour'},
        {id: 2, recipe_id: 2, ingredient: 'Packet Walmart Yeast '},
        {id: 3, recipe_id: 2, ingredient: 'teaspoons Sugar'},
        {id: 4, recipe_id: 1, ingredient: 'teaspoons salt'},
        {id: 5, recipe_id: 1, ingredient: 'tablespoons Olive Oil'},
        {id: 6, recipe_id: 2, ingredient: 'cups warm water'},
        {id: 7, recipe_id: 2, ingredient: 'cups cheese'},
        {id: 8, recipe_id: 1, ingredient: 'cup tomato sauce'}
      ]);
    });
};