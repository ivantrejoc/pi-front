import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
import "./searchBar.css";

const SearchBar = (props) => {
  const [nameTosearch, setNameToSearch] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setNameToSearch(value);
  };

  const dispatch = useDispatch();
  //   const pokemonDetail = useSelector((state) => state.pokemonByName);
  
  const handleSearch= () => {
    dispatch(getPokemonByName(nameTosearch));
     };

      

  return (
    <div>
      <p>
        <input
          type="text"
          value={nameTosearch}
          onChange={handleInputChange}
          placeholder="Buscar Pokemon..."
        />
        <button onClick={handleSearch}>Buscar</button>
      </p>
    </div>
  );
};

export default SearchBar;
