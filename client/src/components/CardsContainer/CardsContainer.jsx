import React from "react";
import Card from "../Card/Card";
import "./cardsContainer.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  //TRAEMOS EL ESTADO GLOBAL DE REDUX
  const pokemons = useSelector((state) => state.allPokemons);
  // console.log(pokemons.id);

  return (
    <div className="cardsContainer">
      {pokemons?.map((pokemon) => {
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
