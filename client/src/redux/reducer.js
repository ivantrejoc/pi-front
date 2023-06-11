import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_ALL_TYPES,
  FILTER_POKEMONS,
  SORT_POKEMONS,
  GET_DETAILS,
} from "./action-types";


 const initialState = {
    allPokemons: [],
    pokemonById: [],
    pokemonByName: []
 }

 const rootReducer = (state= initialState, action) =>{
   switch(action.type) {
      case GET_POKEMONS:
        return {
          ...state,                          //Redux no cambia el estado global, React pisa el estado local
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

        default:
    return {...state};
   };
   
   
 }

 export default rootReducer;