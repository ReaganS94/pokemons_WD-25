const express = require('express')

const { getOnePokemon, getAllPokemons } = require('../controllers/pokemons')

const api = express.Router();

api.route("/").get(getAllPokemons)

api.route("/:id").get(getOnePokemon)

module.exports = api;
