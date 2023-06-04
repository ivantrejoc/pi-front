const { Pokemon } = require("../db");

const createPokemon = async (
  id,
  name,
  sprites,
  life,
  attack,
  defense,
  speed,
  height,
  weight
) => {
  const newPokemon = await Pokemon.create({
    id,
    name,
    sprites,
    life,
    attack,
    defense,
    speed,
    height,
    weight,
  });
  return newPokemon;
};

module.exports = createPokemon;
