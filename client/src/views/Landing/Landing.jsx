import { useNavigate } from "react-router-dom";
import videoPokemon from "../../assets/pokemon-video.mp4";
import logoPokemon from "../../assets/pokemon-logo.png";
import "./landing.css";

const Landing = ()=>{

    const navigate = useNavigate();
    return(
        <div>
          
          <div className="video-container">
      <video autoPlay loop muted className="video-background">
        <source src={videoPokemon} type="video/mp4" />
      </video>
      
      
          <div className="textContainer">
          <img src={logoPokemon} className="LandingImg" alt="logoPokemon" />
          <h1 className="titleLanding">
            ¡Gotta Catch 'Em all!
        </h1>
        <p className="text">
          ¡Discover the fascinating world of pokemon!
          </p>
          <p className="text">
          Dive into an adventure with extraordinary creatures,
          epic battles, and unforgettable friendships.
          </p>
          <p className="text">
          Become in a pokemon master exploring all the pokemon´s features and create 
          your own Pokemon´s just in one site.
          </p>

          

        
        
        
        
        <button className="landingButton"
        onClick={() => {
          navigate("/Home");
        }}
      >
        ¡Let´s go!
      </button>
          </div>
        
        
        </div>
        </div>
    )
}

export default Landing;