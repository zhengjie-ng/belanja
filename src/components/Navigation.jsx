import { NavLink, Outlet } from "react-router-dom";
// import { useContext } from "react";
// import ProductContext from "../context/ProductContext";

import styles from "./Navigation.module.css";

function Navigation() {
  // const ctx = useContext(ProductContext);
  return (
    <div className={styles.divMain}>
      <Outlet />
      <div className={styles.divNavi}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkNaviActive : styles.linkNavi
          }
          to="/home"
        >
          🏠<br></br>Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkNaviActive : styles.linkNavi
          }
          to="/friends"
        >
          👥<br></br>Friends
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkNaviActive : styles.linkNavi
          }
          to="/scan"
        >
          ⛶<br></br>Scan
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkNaviActive : styles.linkNavi
          }
          to="bills"
        >
          📝<br></br>Bills
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkNaviActive : styles.linkNavi
          }
          to="account"
        >
          ⚙️<br></br>Account
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
