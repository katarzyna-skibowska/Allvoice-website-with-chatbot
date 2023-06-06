import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import AllvoiceLogo from "../../assets/AllvoiceLogo.png";

export const Navbar = () => {
  return (
    <nav className={styles.navBox}>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/">
            <img src={AllvoiceLogo} alt="logo" className={styles.logo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" className={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={styles.navLink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/features" className={styles.navLink}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.navLink}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/log-in" className={styles.navLink}>
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
