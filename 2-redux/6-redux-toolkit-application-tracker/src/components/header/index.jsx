import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src="/logo.png" alt="logo" />
        <h2>Başvuru Takibi</h2>
      </div>

      <nav>
        <NavLink className={(e) => (e.isActive ? styles.active : "")} to="/">
          Başvurular
        </NavLink>
        <NavLink className={(e) => (e.isActive ? styles.active : "")} to="/create">
          Yeni Başvuru
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
