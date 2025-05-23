import styles from "./SettlePage.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

function SettlePage() {
  const ctx = useContext(ProductContext);

  return (
    <div className={styles.divMain}>
      <h2 className={styles.h2BelanjaPay}>Payment Successful</h2>
      <h2 className={styles.h2MerchantName}>{ctx.merchant.name}</h2>
      <p className={styles.pTick}>✔</p>
      <p className={styles.pAmountPaid}>Amount Paid</p>
      <p className={styles.pAmount}>{`$${Number(ctx.merchant.payment).toFixed(
        2
      )}`}</p>
      <p className={styles.pHow}>How do you want to settle the bill?</p>
      <button
        className={styles.buttonSplit}
        onClick={() => ctx.handlerSplit("split")}
      >
        Split
      </button>
      <button
        className={styles.buttonBelanja}
        onClick={() => ctx.handlerSplit("belanja")}
      >
        BELANJA
      </button>
      <button className={styles.buttonLater} onClick={ctx.handlerSettleLater}>
        Settle Later
      </button>
    </div>
  );
}

export default SettlePage;
