import React, { useState } from "react";
import Card from "../Card/Card";
import "./cardsContainer.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";

const CardsContainer = () => {
  const pokemonByName = useSelector((state) => state.pokemonByName);
  const allPokemons = useSelector((state) => state.allPokemons);
  const [currentPage, setCurrentPage] = useState(1); //inicia paginado en 1
  const [cardsPerPage, setCardsPerPage] = useState(12); //trae 12 personajes por página
  const indexOfLastPokemon = currentPage * cardsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - cardsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pokemonList =
    pokemonByName.length > 0 ? pokemonByName : currentPokemons;

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
      <div>
        <Pagination
          cardsPerPage={cardsPerPage}
          allPokemons={allPokemons.length}
          pagination={pagination}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
