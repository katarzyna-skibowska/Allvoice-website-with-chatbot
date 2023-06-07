import { Outlet } from "react-router";
import styles from "./Auth.module.css";

export const Auth = () => (
  <div className={styles.wrapperAuth}>
    <h2>Client panel</h2>
    <Outlet />
  </div>
);
