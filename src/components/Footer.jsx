import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
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
      <div className="footer-bottom">
        © 2025 61MetriQuadri. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
