const mongoose = require("mongoose");

const tamagotchiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  hunger: {
    type: Number,
    required: true,
  },

  happiness: {
    type: Number,
    required: true,
  },

  health: {
    type: Number,
    required: true,
  },

  years: {
    type: Number,
    required: true,
  },

  causeOfDeath: {
    type: String,
    required: true,
  },
});

const Mtamagotchi = mongoose.model("tamagotchi", tamagotchiSchema);
module.exports = { Mtamagotchi };