
exports.seed = function(knex) {
  return knex('instructions').insert([
    { recipe_id: 1, ingredient_id: 1, step: 'mix in your flour'},
    { recipe_id: 3, ingredient_id: 5, step: 'put the pickle inside the banana'},
    { recipe_id: 2, ingredient_id: 3, step: 'pour in your chicken broth'},
    { recipe_id: 1, ingredient_id: 2, step: 'pour in your tomato sauce'}
  ]);
};
