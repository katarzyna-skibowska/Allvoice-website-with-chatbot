import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import AllvoiceLogo from "../../assets/AllvoiceLogo.png";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";

export const Navbar = ({ isAuth }) => {
  return (
    <nav className={styles.navBox}>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/">
            <img src={AllvoiceLogo} alt="logo" className={styles.logo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={styles.navLink}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/" className={styles.navLink}>
            Contact Us
          </NavLink>
        </li>
        {!isAuth ? (
          <>
            <li>
              <NavLink to="auth/login" className={styles.navLink}>
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink to="auth/register" className={styles.navLink}>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="auth/forgot-password" className={styles.navLink}>
                Forgot password
              </NavLink>
            </li>
          </>
        ) : (
          <li onClick={() => signOut(auth)}>
            <NavLink to="/" className={styles.navLinkAuth}>
              Log out
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
