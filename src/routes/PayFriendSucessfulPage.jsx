import styles from "./PayFriendSucessfulPage.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PayFriendSucessfulPage() {
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const friend = ctx.user.friends.find((friend) => friend.id === id);

  return (
    <div className={styles.divMain}>
      <h2 className={styles.h2BelanjaPay}>Payment Successful</h2>
      <h2 className={styles.h2MerchantName}>{friend.name}</h2>
      <p className={styles.pTick}>✔</p>
      <p className={styles.pAmountPaid}>Amount Paid</p>
      <p className={styles.pAmount}>{`$${Number(ctx.payFriendInput).toFixed(
        2
      )}`}</p>
      <button className={styles.buttonOk} onClick={() => navigate("/friends")}>
        OK
      </button>
    </div>
  );
}

export default PayFriendSucessfulPage;
