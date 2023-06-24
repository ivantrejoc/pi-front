import { useNavigate } from "react-router-dom";

const Landing = ()=>{

    const navigate = useNavigate();
    return(
        <>
        <h1>
            ESTA ES LA VISTA DE LANDING
        </h1>
        <button
        onClick={() => {
          navigate("/Home");
        }}
      >
        Ingresar
      </button>
        </>
    )
}

export default Landing;