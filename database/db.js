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
      imgUrl: recipe.image_url,
      sourceUrl: recipe.source_url
    }).then(result => console.log(result))
};

module.exports.save = save;