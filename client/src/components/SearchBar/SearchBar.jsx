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
  
  
  const handleSearch= () => {
    if(!nameTosearch) {
      alert("You must type a pokemon name")
    }else{
      dispatch(getPokemonByName(nameTosearch))
      .catch((error)=>{
        alert("Pokemon not found")
      })
    }  

     };

      

  return (
    <div className="searchCont">
      
        <input
        className="searchInput"
          type="search"
          
          onChange={handleInputChange}
          placeholder="Buscar Pokemon..."
        />
        <button className="searchButton" onClick={handleSearch}>Buscar</button>
     
    </div>
  );
};

export default SearchBar;
