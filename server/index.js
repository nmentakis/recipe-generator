const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const axios = require('axios');
const config = require('../config.js')

const app = express();
const port = process.env.port || 3000;

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'recipegenerator'
  }
})
app.use(express.static(__dirname +'/../dist'));

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.send('WORK')
// })
//send a request to the api to search for ingredients
app.post('/api/search', (req, res) => {
  console.log('this value: ', req.body.value)
  axios.get('https://www.food2fork.com/api/search', {
    params: {
      key: config.TOKEN,
      sort: 'r',
      q: req.body.value
    }
  }).then(result => {
    res.json(result.data);
    result.data.recipes.forEach(function(recipe) {
      db.save(recipe, (err, recipe) => {
        if(err) {console.log(err)}
        else {console.log('complete')}
      })
    });
  })

})

app.post('/api/delete', (req,res) => {
  console.log(req.body)
  knex('recipes').where('title', req.body.title).del().then(result => {
    res.send('All Gone')
  })
})

app.get('/api/recipes', (req,res) => {
  //SELECT myid FROM mytable ORDER BY RANDOM() LIMIT 1;
  knex.raw('SELECT * FROM recipes ORDER BY RANDOM() Limit 5').then(recipes => {
    res.json(recipes.rows)
  })
})

app.post('/api/recipes', (req, res) => {
  // send in a array
  req.body.recipes.forEach(function(recipe) {
    db.save(recipe, (err, recipe) => {
      if (err) {
        console.log(err)
      } else {
        console.log('complete')
      }
    })
  })
  res.send('did it')
})

app.listen(port, () => console.log(`Server is listening on port: ${port}!`));
