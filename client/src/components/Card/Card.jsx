import "./card.css";
import { Link } from "react-router-dom";

const Card = ({id, name, sprites, types}) => {
   
  
  return (
    <div className="card" >
      <Link to={`/detail/${id}`}>
        <p>Name: {name}</p>
        <img src={sprites} width={200} height={130} alt={name} />
      <p>Types: {types}</p>
      </Link>
      
    </div>
  );
};

export default Card;
