import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  FILTER_POKEMONS_BY_TYPE,
  SORT_POKEMONS,
} from "./action-types";

const initialState = {
  allPokemons: [],
  allPokemonsCopy: [],
  pokemonById: [],
  pokemonByName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state, //Redux no cambia el estado global, React pisa el estado local
        allPokemons: action.payload,
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonById: action.payload,
      };

    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonByName: action.payload,
      };

    // case FILTER_POKEMONS_BY_TYPE:
    //   const copyPokemons = state.allPokemons;
    //   const filtered =
    //     action.payload === "ALL"
    //       ? copyPokemons
    //       : copyPokemons.filter((ele) =>
    //           ele.types.find((e) => e === action.payload)
    //         );
    //   return { ...state, allPokemonsCopy: filtered };

    default:
      return { ...state };
  }
};

export default rootReducer;
