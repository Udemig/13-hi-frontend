import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top shadow navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <i className="bi bi-book me-2"></i>
          Kitap Kurdu
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Kitaplar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category">
                Kategori
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
