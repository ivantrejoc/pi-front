import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_ALL_TYPES,
  FILTER_POKEMONS,
  SORT_POKEMONS,
  GET_DETAILS,
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
      const apiData = await axios.get(
        `http://localhost:3001/pokemons/${id}`
      );
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
