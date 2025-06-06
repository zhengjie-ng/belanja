import styles from "./ItemCoinsHistory.module.css";

function ItemCoinsHistory({ name, mode, coins, date }) {
  const Statement = () => {
    if (mode === "redeem") {
      return (
        <div>
          <p className={styles.name}>Redeemed Reward -</p>
          <p className={styles.name}>{name}</p>
        </div>
      );
    } else if (mode === "bill") {
      return (
        <div>
          <p className={styles.name}>Settled Bill -</p>
          <p className={styles.name}>{name}</p>
        </div>
      );
    } else if (mode === "friendPaid") {
      return (
        <div>
          <p className={styles.name}>Paid Friend -</p>
          <p className={styles.name}>{name}</p>
        </div>
      );
    } else if (mode === "demo") {
      return (
        <div>
          <p className={styles.name}>App -</p>
          <p className={styles.name}>Demostration</p>
        </div>
      );
    } else if (mode === "new") {
      return (
        <div>
          <p className={styles.name}>New Sign Up -</p>
          <p className={styles.name}>Bonus</p>
        </div>
      );
    }
    return null; //
  };

  const Coins = () => {
    if (mode === "redeem") {
      return (
        <div>
          <p className={styles.minusCoins}>-{coins}</p>
        </div>
      );
    } else if (
      mode === "bill" ||
      mode === "friendPaid" ||
      mode === "demo" ||
      mode === "new"
    ) {
      return (
        <div>
          <p className={styles.addCoins}>+{coins}</p>
        </div>
      );
    }
    return null; //
  };
  return (
    <div className={styles.divMain}>
      <div className={styles.divNameDate}>
        <Statement />
        {/* <p className={styles.name}>{name}</p> */}
        <p
          className={styles.date}
        >{`${date.d} ${date.Month} ${date.y} ${date.time}`}</p>
      </div>
      <Coins />
    </div>
  );
}

export default ItemCoinsHistory;
