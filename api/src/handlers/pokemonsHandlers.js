const createPokemon = require("../controllers/createPokemon");
const getPokemonById = require("../controllers/getPokemonById");
const {getTypes} = require("../controllers/getTypes");
const {
  getAllPokemons,
  getPokemonsByName,
} = require("../controllers/getPokemons");


const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name
      ? await getPokemonsByName(name)
      : await getAllPokemons();
      
      results.length > 0 ?
      res.status(200).json(results)
      : res.status(404).json("Pokemon no existe");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPokemonByIdHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api"
  try {
    const pokemon = await getPokemonById(id, source);
   
        res.status(200).json(pokemon);
        
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getTypesHandler = async (req, res) => {
  try {
    const types = await getTypes();
    res.status(200).json(types);
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

const createPokemonHandler = async (req, res) => {
  try {
    const { id, name, sprites, life, attack, defense, speed, height, weight } =
      req.body;
    const newPokemon = await createPokemon(
      id,
      name,
      sprites,
      life,
      attack,
      defense,
      speed,
      height,
      weight
    );
    return res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPokemonsHandler,
  getPokemonByIdHandler,
  // getPokemonByNameHandler,
  getTypesHandler,
  createPokemonHandler,
};
