import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink to="/home">Accueil</NavLink>
      <NavLink to="/movies">Films</NavLink>
      <NavLink to="/favorites">Favoris</NavLink>
    </nav>
  );
}

export default Navbar;