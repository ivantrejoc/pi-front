import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
import "./searchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setInput(value);
  };

  const dispatch = useDispatch();
//   const pokemonDetail = useSelector((state) => state.pokemonByName);

  const handleClick = () => {
    dispatch(getPokemonByName(input));
    setInput("");
  };

  
  return (
    <div>
      <p>
        <input
          type="search"
          value={input}
          onChange={handleInputChange}
          placeholder="Buscar Pokemon..."
        />
        <button onClick={handleClick}>Buscar</button>
      </p>
    </div>
  );
};

export default SearchBar;
