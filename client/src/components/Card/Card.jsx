import "./card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  // console.log(props.id);
  return (
    <div className="card" >
      <Link to={`/detail/${props.id}`}>
        <p>Name: {props.name}</p>
        <img src={props.sprites} width={200} height={130} alt={props.name} />
      <p>Types: {props.types}</p>
      </Link>
      
    </div>
  );
};

export default Card;
