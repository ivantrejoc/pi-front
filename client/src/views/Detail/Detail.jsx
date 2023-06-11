import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../redux/actions";
import "./detail.css";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch]);
  const pokemonDetail = useSelector((state) => state.pokemonById);
  const { name, sprites, life, attack, defense, speed, height, weight, type } =
    pokemonDetail;
  const navigate = useNavigate();

  return (
    <div className="detailContent">
      <h1>Detalles</h1>

      <div>
        <h1>Name: {name}</h1>
        <img src={sprites} alt={name} />
        <h2>Life: {life}</h2>
        <h2>Attack: {attack} </h2>
        <h2>Defense:{defense} </h2>
        <h2>Speed: {speed} </h2>
        <h2>Height: {height} </h2>
        <h2>Weight: {weight}</h2>
        <h2>Types: {type}</h2>
      </div>

      <button
        onClick={() => {
          navigate("/Home");
        }}
      >
        Back to home
      </button>
    </div>
  );
};

export default Detail;
