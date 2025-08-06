import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/logo.webp" alt="logo" width={40} />
        <h2>Radar</h2>
      </Link>

      <nav>
        <NavLink to="/">Harita</NavLink>
        <NavLink to="/list">Liste</NavLink>
      </nav>

      <h5>136 Uçuş Bulundu</h5>
    </header>
  );
};

export default Header;
