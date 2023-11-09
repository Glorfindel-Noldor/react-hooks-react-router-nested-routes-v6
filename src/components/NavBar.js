import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <p><small>Hello, World!</small></p>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        className="nav-link"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default NavBar;