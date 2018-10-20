
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function (table) {
    table.increments();
    table.string('title');
    table.string('imgUrl');
    table.unique('sourceUrl');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
