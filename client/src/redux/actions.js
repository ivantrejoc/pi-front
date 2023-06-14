import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  FILTER_POKEMONS_BY_TYPE,
  FILTER_POKEMONS_BY_STORAGE,
  SORT_POKEMONS,
} from "./action-types";

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get("http://localhost:3001/pokemons");
      const pokemons = apiData.data;
      return dispatch({
        type: GET_POKEMONS,
        payload: pokemons,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPokemonById = (id) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
      const pokemon = apiData.data;
      return dispatch({
        type: GET_POKEMON_BY_ID,
        payload: pokemon,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(
        `http://localhost:3001/pokemons?name=${name}`
      );
      const pokemon = apiData.data;
      return dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: pokemon,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByTypes = (types) => {
  return {
    type: FILTER_POKEMONS_BY_TYPE,
    payload: types,
  };
};

export const filterByStorage = (origin) => {
  return {
    type: FILTER_POKEMONS_BY_STORAGE,
    payload: origin,
  };
};
