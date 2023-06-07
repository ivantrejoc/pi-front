import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <p>Sprites: {props.sprites}</p>
     
    </div>
  );
};

export default Card;
