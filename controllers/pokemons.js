const db = require("../pokedex.json")

// console.log(db)

const getOnePokemon = (req, res, next) => {
    try {
    const { id } = req.params
    console.log("REQUEST", req.params)
    console.log(typeof id)
    const pokemon = db.find(pokemon =>  pokemon.id === id)
    res.json({
        pokemon
    })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}

const getAllPokemons = async (req, res) => {
    try {
        res.json(
         db
        )
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}

module.exports = {
    getOnePokemon,
    getAllPokemons
}
