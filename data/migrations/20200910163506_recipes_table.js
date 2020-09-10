
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe', 255)
            .unique()
            .notNullable()
            .index();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient')
        tbl.float('quantity');
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('step')
            .unique()
            .notNullable()
            .index();
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema    
    .dropTableIfExist('instructions')
    .dropTableIfExist('ingredients')
    .dropTableIfExist('recipes')
};
