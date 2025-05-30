import { useContext } from "react";
import styles from "./HomePage.module.css";
import ProductContext from "../context/ProductContext";

function HomePage() {
  const ctx = useContext(ProductContext);
  return (
    <div className={styles.divMain}>
      <div className={styles.leftHeader}>
        <h2 className={styles.h2}>{`Hi ${ctx.user.name}`}</h2>
        <h3 className={styles.h3}>Belanja Wallet</h3>
      </div>

      <div className={styles.rightHeader}>
        <div className={styles.divIcons}>
          <button className={styles.button} onClick={ctx.handlerLogoutClick}>
            ↩
          </button>
          <button
            className={
              ctx.user.notifications.notify
                ? styles.buttonActive
                : styles.button
            }
            onClick={ctx.handlerClickNotifications}
          >
            ⩍
          </button>
        </div>
        <div className={styles.divWallet}>
          <h3 className={styles.wallet}>${ctx.user.wallet}</h3>
          <p className={styles.coins}>🪙 {ctx.user.coins.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
