import SearchBar from "../../components/SearchBar/SearchBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, filterByTypes, filterByOrigin, sortPokemons, sortPokemonsByAttack } from "../../redux/actions";



const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  
  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  function handleTypeFilter(e) {
    e.preventDefault();
    dispatch(filterByTypes(e.target.value));
  }

  function handleOriginFilter(e) {
    e.preventDefault();
    dispatch(filterByOrigin(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(sortPokemons(e.target.value));
  }

  function handleSortByAttack(e) {
    e.preventDefault();
    dispatch(sortPokemonsByAttack(e.target.value));
  }
  

  return (
    <div>
      <div className="filters">
        <select name="filterbytypes" onClick={(e) => handleTypeFilter(e)}>
          <option value="todos">Todos</option>
          <option value="normal">normal</option>
          <option value="fighting">fighting</option>
          <option value="flying">flying</option>
          <option value="poison">poison</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="bug">bug</option>
          <option value="ghost">ghost</option>
          <option value="steel">steel</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="grass">grass</option>
          <option value="electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="ice">ice</option>
          <option value="dragon">dragon</option>
          <option value="dark">dark</option>
          <option value="fairy">fairy</option>
          <option value="unknown">unknown</option>
          <option value="shadow">shadow</option>
        </select>

        <select name="filterByOrigin" onClick={(e) => handleOriginFilter(e)}>
          <option value="api">Api</option>
          <option value="created">Data Base</option>
        </select>
               

        <select name="sort" onChange={(e) => handleSort(e)}>
          <option value="asc">Ascendente</option>
          <option value="des">Descendente</option>
        </select>

        <select name="sortByAttack" onClick={(e) => handleSortByAttack(e)}>
          <option value="more">more strong</option>
          <option value="less">less strong</option>
        </select>
      </div>     
      
      <SearchBar />
      <h1>Esta es la vista de home</h1>
      <button onClick={(e) => handleClick(e)}>Recargar</button>
      <div>
        <CardsContainer />
      </div>
    </div>
  );
};

export default Home;
