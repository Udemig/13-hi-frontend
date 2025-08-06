import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flights);

  return (
    <header>
      <Link to="/" className="logo">
        <img src="/logo.webp" alt="logo" width={40} />
        <h2>Udemig Radar</h2>
      </Link>

      <nav>
        <NavLink to="/">
          <button>Harita</button>
        </NavLink>
        <NavLink to="/list">
          <button>Liste</button>
        </NavLink>
      </nav>

      <h3>{isLoading ? "Radar çalışıyor..." : error ? error : flights.length + " uçuş bulundu"}</h3>
    </header>
  );
};

export default Header;
