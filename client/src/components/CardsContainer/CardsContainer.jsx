import React from "react";
import Card from "../Card/Card";
import "./cardsContainer.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

const CardsContainer = ({ pokemons }) => {
  const pokemonByName = useSelector((state) => state.pokemonByName);

  const pokemonList = pokemonByName.length > 0 ? pokemonByName : pokemons;

  return (
    <div className="container">
      {pokemonList?.map((pokemon) => (
        <div key={pokemon.id}>
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            sprites={pokemon.sprites}
            types={pokemon.types.join(" - ")}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
