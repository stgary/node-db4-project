
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient: 'cup of flour', quantity: 1 },
    { ingredient: 'cans of tomato sauce', quantity: 1.5 },
    { ingredient: 'liters chicken broth', quantity: 2.5 },
    { ingredient: 'portobello mushrooms', quantity: 4 },
    { ingredient: 'Pickles', quantity: 3 }
  ]);

};
