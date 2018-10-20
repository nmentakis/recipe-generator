const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'recipegenerator'
  }
})

let save = (recipe, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  knex('recipes')
  .insert(
    { title: recipe.title,
      image_url: recipe.image_url,
      source_url: recipe.source_url
    }).then(result => callback(result))
};

module.exports.save = save;