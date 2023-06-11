import React from "react";
import Card from "../Card/Card";
import "./cardsContainer.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const pokemonByName = useSelector((state) => state.pokemonByName);
  const allPokemons = useSelector((state) => state.allPokemons);

  const pokemonList = pokemonByName.length > 0 ? pokemonByName : allPokemons;

  return (
    <div className="cardsContainer">
      {pokemonList?.map((pokemon) => {
        return (
          <div>
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprites={pokemon.sprites}
              types={pokemon.types}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
