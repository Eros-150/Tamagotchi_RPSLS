const express=require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const { Mrpsls } = require("./src/models/Mrpsls");
const { Mtamagotchi } = require("./src/models/Mtamagotchi");

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

mongoose.connect("mongodb+srv://eros:Joiser12@erosm6.x3lql.mongodb.net/expressgames", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));

db.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/rpsls", (req, res) => {
  const rpslsGame = new Mrpsls({
    date: req.body.date,
    time: req.body.time,
    name: req.body.name,
    result: req.body.result,
  });
  rpslsGame
    .save()
    .then(() => {
      res.status(201).send("Data inserted");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Server error");
    });
});
app.get("/rpsls/records", async (req, res) => {
  try {
    const results = await Mrpsls.find();
    res.json(results);
    console.log(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/tamagotchi", (req, res) => {
  const tamagotchiGame = new Mtamagotchi({
    name: req.body.name,
    hunger: req.body.hunger,
    happiness: req.body.happiness,
    health: req.body.health,
    years: req.body.years,
    causeOfDeath: req.body.causeOfDeath,
  });
  tamagotchiGame
    .save()
    .then(() => {
      res.status(201).send("Data inserted");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Server error");
    });
});

app.get("/tamagotchi/records", async (req, res) => {
  try {
    const results = await Mtamagotchi.find();
    res.json(results);
    console.log(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
