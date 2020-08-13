
exports.seed = function(knex, Promise) {
    return knex('recipes').truncate()
      .then(function () {
        return knex('recipes').insert([
          {id: 1, name: 'cheese pizza' },
          {id: 2, name: 'pepperoni pizza'},
        ]);
      });
};
