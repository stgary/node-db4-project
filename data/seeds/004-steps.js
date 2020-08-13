
exports.seed = function(knex, Promise) {
  return knex('accounts').truncate()
    .then(function () {
    return knex('steps').insert([
      {id: 1, recipe_id: 1, ingredient_id: 1, quantity_id: 2},
      {id: 2, recipe_id: 2, ingredient_id: 2, quantity_id: 6},
      {id: 3, recipe_id: 2, ingredient_id: 3, quantity_id: 1},
      {id: 4, recipe_id: 1, ingredient_id: 4, quantity_id: 5},
      {id: 5, recipe_id: 1, ingredient_id: 5, quantity_id: 4},
      {id: 6, recipe_id: 2, ingredient_id: 6, quantity_id: 3},
      {id: 7, recipe_id: 2, ingredient_id: 7, quantity_id: 2},
      {id: 8, recipe_id: 1, ingredient_id: 8, quantity_id: 2}
    ]);
  });
};
