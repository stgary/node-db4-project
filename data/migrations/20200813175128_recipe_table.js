
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('id');
        tbl.string('name', 256)
            .notNullable()
            .unique()
            .index();
    })
    .createTable('quantity', tbl => {
        tbl.increments('id');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.float('amount');
    })
    .createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.string('ingredient', 256)
            .notNullable()
            .unique();
    })
    .createTable('steps', tbl => {
        tbl.increments('id');
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.integer('quantity_id')
            .unsigned()
            .notNullable()
            .references('quantity.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  
};
