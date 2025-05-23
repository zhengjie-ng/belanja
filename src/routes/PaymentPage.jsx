import styles from "./PaymentPage.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

function PaymentPage() {
  const ctx = useContext(ProductContext);
  return (
    <div>
      <button className={styles.buttonBack} onClick={ctx.handlerClickBack}>
        󠀩󠁽≫
      </button>
      <h2 className={styles.h2BelanjaPay}>Belanja Pay</h2>
      <h2 className={styles.h2MerchantName}>{ctx.merchant.name}</h2>
      <div className={styles.divPayField}>
        <p>Total amount to pay</p>
        <input
          className={styles.inputPayField}
          placeholder="$0.00"
          type="number"
          // value={ctx.merchant.payment}
          onChange={ctx.handlerMerchantPaymentChange}
        ></input>
      </div>
      <div className={styles.divWallet}>
        <p>Belanja Wallet</p>
        <p>{`💷 $${ctx.user.wallet}`}</p>
      </div>
      <div className={styles.divPaymentWrapped}>
        <div className={styles.divTotalPrice}>
          <p className={styles.pTotal}>Total price</p>
          <p className={styles.pPrice}>{`$${Number(
            ctx.merchant.payment
          ).toFixed(2)}`}</p>
        </div>
        <button
          className={styles.buttonPayment}
          onClick={ctx.handlerClickMerchantMakePayment}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
