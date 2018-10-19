const express = require('express');
const bodyParser = require('body-parser');

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

app.get('/api/recipes', (req,res) => {
  knex('recipes').then(recipes => {
    res.json(recipes)
  })
})

app.listen(port, () => console.log(`Server is listening on port: ${port}!`));
