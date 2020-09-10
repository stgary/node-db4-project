
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient: 'cup of flour', quantity: 1, recipe_id: 1},
    { ingredient: 'cans of tomato sauce', quantity: 1.5, recipe_id: 1},
    { ingredient: 'liters chicken broth', quantity: 2.5, recipe_id: 2 },
    { ingredient: 'portobello mushrooms', quantity: 4, recipe_id: 2},
    { ingredient: 'Pickles', quantity: 3, recipe_id: 3}
  ]);

};
