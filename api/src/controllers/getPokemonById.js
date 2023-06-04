const axios = require("axios");
const { Pokemon } = require("../db");

const cleanArray = (arr) => {
  const clean = arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      sprites: e.sprites.front_default, //revisar como viene de la api las imagenes
      life: e.stats[0].base_stat,
      attack: e.stats[1].base_stat,
      defense: e.stats[2].base_stat,
      speed: e.stats[5].base_stat,
      height: e.height,
      weight: e.weight,
      types: e.types.map((t) => t.type.name),
    };
  });
  return clean;
};

const getPokemonById = async (id, source) => {
  if (source === "api") {
    // const apiPokemon = (
    //   await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // ).data;

    const apiRaw = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10000=offset=0`)
    ).data.results;

    const pokemonsDetails = await Promise.all(
      apiRaw.map(async (e) => {
        const response = (await axios.get(e.url)).data;
        return response;
      })
    );

    //ordena resultado
    const apiPokemons = cleanArray(pokemonsDetails);

    const pokemonFiltered = apiPokemons.filter((el) => { //problema con el filter NO CONSIGUE EL ID
      return el.id === id;
    });

    return pokemonFiltered;
  }

  await Pokemon.findByPk(id);
};

module.exports = getPokemonById;
