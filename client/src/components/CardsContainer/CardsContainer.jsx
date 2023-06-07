import Card from "../Card/Card";
import "./cardsContainer.css";

const CardsContainer = () => {
  const pokemons = [
    {
      id: "12b196bb-dc88-4a01-ab71-fe45ce3604e8",
      name: "julito",
      sprites: "url",
      life: 46,
      attack: 22,
      defense: 48,
      speed: 58,
      height: 34,
      weight: 39,
      Types: [
        {
          name: "flying",
        },
        {
          name: "bug",
        },
        {
          name: "fire",
        },
      ],
    },
    {
      id: 1,
      name: "bulbasaur",
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      life: 45,
      attack: 49,
      defense: 49,
      speed: 45,
      height: 7,
      weight: 69,
      types: ["grass", "poison"],
    },
    {
      id: 2,
      name: "ivysaur",
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      life: 60,
      attack: 62,
      defense: 63,
      speed: 60,
      height: 10,
      weight: 130,
      types: ["grass", "poison"],
    },
    {
      id: 3,
      name: "venusaur",
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      life: 80,
      attack: 82,
      defense: 83,
      speed: 80,
      height: 20,
      weight: 1000,
      types: ["grass", "poison"],
    },
    {
      id: 4,
      name: "charmander",
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      life: 39,
      attack: 52,
      defense: 43,
      speed: 65,
      height: 6,
      weight: 85,
      types: ["fire"],
    },
  ];
  return (
    <div className="cardsContainer">
      {pokemons.map((pokemon) => {
        return <Card name={pokemon.name} sprites={pokemon.sprites} />;
      })}
    </div>
  );
};

export default CardsContainer;
