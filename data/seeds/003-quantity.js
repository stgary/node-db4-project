
exports.seed = function(knex, Promise) {
  return knex('quantity').truncate()
    .then(function () {
      return knex('quantity').insert([
        {id: 1, ingredient_id: 1, amount: 2.5},
        {id: 2, ingredient_id: 2, amount: 1.5},
        {id: 3, ingredient_id: 3, amount: 2},
        {id: 4, ingredient_id: 4, amount: 0.75},
        {id: 5, ingredient_id: 5, amount: 1.25},
        {id: 6, ingredient_id: 6, amount: 1},
        {id: 7, ingredient_id: 7, amount: 1.75},
        {id: 8, ingredient_id: 8, amount: 1}
      ]);
  });
};