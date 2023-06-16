import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  FILTER_POKEMONS_BY_TYPE,
  FILTER_POKEMONS_BY_STORAGE,
  SORT_POKEMONS,
} from "./action-types";
import { filterByStorage } from "./actions";

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
        allPokemonsCopy: action.payload,
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

    case FILTER_POKEMONS_BY_TYPE:
      const allPokemonsCopy = state.allPokemonsCopy;
      const filteredByType =
        action.payload === "todos"
          ? allPokemonsCopy
          : allPokemonsCopy.filter((e) => e.types === action.payload);

      return {
        ...state,
        allPokemons: filteredByType,
      };

    //para este caso debo crear un flag en la base de datos que me diga si es creado o de api
    // case FILTER_POKEMONS_BY_STORAGE:
    //   const pokemonsCopy = state.allPokemonsCopy;
    //   const filteredByStorage = action.payload === "created"?
    //   ? pokemonsCopy
    //   :

    case SORT_POKEMONS:

    const order = [...state.allPokemonsCopy];
    const sortedPokemons = order.sort((a,b)=>{
      if(a.name > b.name){
        return action.payload === "asc" 
        ? 1
        :-1
        
      } if(a.name < b.name){
        return action.payload === "des"
        ? 1
        :-1
      } else return 0;
    })
    
    return {
      ...state,
      allPokemons: sortedPokemons
    };
      
    default:
      return { ...state };
  }
};

export default rootReducer;
