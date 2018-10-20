
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', function (table) {
    table.increments();
    table.string('title');
    table.string('image_url');
    table.string('source_url');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
