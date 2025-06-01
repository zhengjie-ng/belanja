import { NavLink, Outlet } from "react-router-dom";
import { useContext, useState, useEffect, useMemo } from "react";
import ProductContext from "../context/ProductContext";

import styles from "./Navigation.module.css";

function Navigation() {
  const ctx = useContext(ProductContext);
  const [unsettledBillNumber, setUnsettledBillNumber] = useState("");

  const bills = useMemo(() => ctx.user?.bills || [], [ctx.user?.bills]);

  useEffect(() => {
    const unsettled = bills.filter((bill) => bill.settle === false);
    setUnsettledBillNumber(unsettled.length > 0 ? unsettled.length : "");
  }, [bills]);

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
          onClick={() => ctx.handleClearMessages()}
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
          <div></div>
          📝<span className={styles.billNotify}>{unsettledBillNumber}</span>
          <br></br>Bills
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
