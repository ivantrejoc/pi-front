import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux"; 
import validation from "./validation";
import {getTypes} from "../../redux/actions";
import "./form.css";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();
  // const types = useSelector((state)=> state.types)
  const [input, setInput] = useState({
    name: "",
    sprites: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    sprites: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const changeHandler = (event) => {
    //CONTROLA EL FORMULARIO
    const property = event.target.name;
    const value = event.target.value;

    // validation({ ...input, [property]: value });
    setInput({ ...input, [property]: value });
    setErrors(validation({ ...input, [property]: value }));
  };

  function typeSelectHandler(e) {
    //CONTROLA LA SELECCIÓN DE TIPO DE POKEMONS
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }

  const submitHandler = (event) => {
    event.preventDefault(); //PREVIENE ERRORES EXTRAÑOS
    axios
      .post("http://localhost:3001/pokemons", input)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };
  
  return (
    <div>
      <h1> ESTA ES MI VISTA DE FORM</h1>
      <form className="formContainer" onSubmit={submitHandler}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={changeHandler}
          />
          {errors.name ? <span className="errors">{errors.name}</span> : null}
        </div>
        <div>
          <label>Sprites:</label>
          <input
            type="url"
            name="sprites"
            value={input.sprites}
            onChange={changeHandler}
          />
          {errors.sprites ? (
            <span classsName="errors">{errors.sprites}</span>
          ) : null}
        </div>
        <div>
          <label>Life:</label>
          <input
            type="number"
            name="life"
            min="0"
            max="100"
            value={input.life}
            onChange={changeHandler}
          />
          {errors.life ? <span classsName="errors">{errors.life}</span> : null}
        </div>
        <div>
          <label>Attack:</label>
          <input
            type="number"
            name="attack"
            min="0"
            max="100"
            value={input.attack}
            onChange={changeHandler}
          />
          {errors.attack ? (
            <span classsName="errors">{errors.attack}</span>
          ) : null}
        </div>
        <div>
          <label>Defense:</label>
          <input
            type="number"
            name="defense"
            min="0"
            max="100"
            value={input.defense}
            onChange={changeHandler}
          />
          {errors.defense ? (
            <span classsName="errors">{errors.defense}</span>
          ) : null}
        </div>
        <div>
          <label>Speed:</label>
          <input
            type="number"
            name="speed"
            min="0"
            max="100"
            value={input.speed}
            onChange={changeHandler}
          />
          {errors.speed ? (
            <span classsName="errors">{errors.speed}</span>
          ) : null}
        </div>
        <div>
          <label>Height:</label>
          <input
            type="number"
            name="height"
            min="0"
            max="100"
            value={input.height}
            onChange={changeHandler}
          />
          {errors.height ? (
            <span classsName="errors">{errors.height}</span>
          ) : null}
        </div>
        <div>
          <label>Weight:</label>
          <input
            type="number"
            name="weight"
            min="0"
            max="100"
            value={input.weight}
            onChange={changeHandler}
          />
          {errors.weight ? (
            <span classsName="errors">{errors.weight}</span>
          ) : null}
        </div>

        <div>
          <label>Types:</label>
          {/* <select onChange={typeSelectHandler}>
            {types?.map((t)=>{
              return(
              <option key={t.name} value={t.name} name ="type" >{t.name}</option>)
            })}
          </select> */}
          <input
            type="checkbox"
            id="1"
            value="normal"
            onClick={typeSelectHandler}
          />
          <label for="1">normal</label>
          <input
            type="checkbox"
            id="2"
            value="fighting"
            onClick={typeSelectHandler}
          />
          <label for="2">fighting</label>
          <input
            type="checkbox"
            id="3"
            value="flying"
            onClick={typeSelectHandler}
          />
          <label for="3">flying</label>
          <input
            type="checkbox"
            id="4"
            value="poison"
            onClick={typeSelectHandler}
          />
          <label for="4">poison</label>
          <input
            type="checkbox"
            id="5"
            value="ground"
            onClick={typeSelectHandler}
          />
          <label for="5">ground</label>
          <input
            type="checkbox"
            id="6"
            value="rock"
            onClick={typeSelectHandler}
          />
          <label for="1">rock</label>
          <input
            type="checkbox"
            id="7"
            value="bug"
            onClick={typeSelectHandler}
          />
          <label for="7">bug</label>
          <input
            type="checkbox"
            id="8"
            value="ghost"
            onClick={typeSelectHandler}
          />
          <label for="8">ghost</label>
          <input
            type="checkbox"
            id="9"
            value="steel"
            onClick={typeSelectHandler}
          />
          <label for="9">steel</label>
          <input
            type="checkbox"
            id="10"
            value="fire"
            onClick={typeSelectHandler}
          />
          <label for="10">fire</label>
          <input
            type="checkbox"
            id="11"
            value="water"
            onClick={typeSelectHandler}
          />
          <label for="1">water</label>
          <input
            type="checkbox"
            id="12"
            value="grass"
            onClick={typeSelectHandler}
          />
          <label for="12">grass</label>
          <input
            type="checkbox"
            id="13"
            value="electric"
            onClick={typeSelectHandler}
          />
          <label for="13">electric</label>
          <input
            type="checkbox"
            id="14"
            value="psychic"
            onClick={typeSelectHandler}
          />
          <label for="14">psychic</label>
          <input
            type="checkbox"
            id="15"
            value="ice"
            onClick={typeSelectHandler}
          />
          <label for="15">ice</label>
          <input
            type="checkbox"
            id="16"
            value="dragon"
            onClick={typeSelectHandler}
          />
          <label for="16">dragon</label>
          <input
            type="checkbox"
            id="17"
            value="dark"
            onClick={typeSelectHandler}
          />
          <label for="17">dark</label>
          <input
            type="checkbox"
            id="18"
            value="fairy"
            onClick={typeSelectHandler}
          />
          <label for="18">fairy</label>
          <input
            type="checkbox"
            id="19"
            value="unknown"
            onClick={typeSelectHandler}
          />
          <label for="19">unknown</label>
          <input
            type="checkbox"
            id="20"
            value="shadow"
            onClick={typeSelectHandler}
          />
          <label for="20">shadow</label>
        </div>
        <button type="submit" className="submitButton">
          ¡Create Pokemon!
        </button>
      </form>
    </div>
  );
};

export default Form;
