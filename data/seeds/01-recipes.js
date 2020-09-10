
exports.seed = function(knex) {
  return knex('recipes').insert([
    { recipe: 'Cheese Pizza'},
    { recipe: 'Mushroom Soup'},
    { recipe: 'Pickled Bananas'}
  ]);

};
