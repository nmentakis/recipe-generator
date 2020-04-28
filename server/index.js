const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/db.js");
const axios = require("axios");
const config = require("../config.js");

const app = express();
const port = process.env.port || 3000;

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    database: "recipegenerator",
  },
});
app.use(express.static(__dirname + "/../dist"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/api/love", (req, res) => {
  knex("favorites")
    .insert({
      title: req.body.title,
      image_url: req.body.image_url,
      source_url: req.body.source_url,
    })
    .then((result) => res.send("complete"));
});

app.get("/api/love", (req, res) => {
  knex
    .raw("SELECT * FROM favorites ORDER BY RANDOM() Limit 30")
    .then((recipes) => {
      res.json(recipes.rows);
    });
});

app.get("/things", (req, res) => {
  res.send("things");
});

app.post("/api/search", (req, res) => {
  axios
    .get("https://www.food2fork.com/api/search", {
      params: {
        key: config.TOKEN,
        sort: "r",
        q: req.body.value,
      },
    })
    .then((result) => {
      res.json(result.data);
      result.data.recipes.forEach(function (recipe) {
        db.save(recipe, (err, recipe) => {
          if (err) {
            console.log(err);
          } else {
            console.log("complete");
          }
        });
      });
    });
});

app.post("/api/delete", (req, res) => {
  knex("recipes")
    .where("title", req.body.title)
    .del()
    .then((result) => {
      res.send("All Gone");
    });
});

app.get("/api/recipes", (req, res) => {
  knex
    .raw("SELECT * FROM recipes ORDER BY RANDOM() Limit 30")
    .then((recipes) => {
      res.json(recipes.rows);
    });
});

app.post("/api/recipes", (req, res) => {
  req.body.recipes.forEach(function (recipe) {
    db.save(recipe, (err, recipe) => {
      if (err) {
        console.log(err);
      } else {
        console.log("complete");
      }
    });
  });
  res.send("did it");
});

app.listen(port, () => console.log(`Server is listening on port: ${port}!`));
