import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navCont">
      <Link className="navButtons" to="/home">Home</Link>
      <Link className="navButtons" to="/create">Create Pokemon</Link>
    </div>
  );
};


export default NavBar;