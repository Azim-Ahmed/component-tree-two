import { Link } from "@reach/router";
import "./navSection.css";

const NavSection = () => {
  return (
    <div className="nav-background_color">
      <ul className="nav-section-style">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/serviceDetails">serviceDetails</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
