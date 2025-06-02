import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>61MetriQuadri</h2>
      </div>
      <nav className="footer-nav">
        <ul className="footer-nav__list">
          <li>
            <Link to="/">
              <i className="fas fa-house" /> Home
            </Link>
          </li>
          <li>
            <Link to="/chi-siamo">
              <i className="fas fa-users" /> Chi Siamo
            </Link>
          </li>
          <li>
            <Link to="/prodotti">
              <i className="fas fa-shopping-cart" /> Store
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
