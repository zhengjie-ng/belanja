import styles from "./PayFriend.module.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

function PayFriend() {
  const { id } = useParams();
  const ctx = useContext(ProductContext);
  const friend = ctx.user.friends.find((friend) => friend.id === id);
  return (
    <div className={styles.divMain}>
      <div className={styles.divHeader}>
        <button className={styles.buttonBack} onClick={ctx.handlerClickBack}>
          󠀩󠁽≫
        </button>
        <h2 className={styles.settlement}>Pay Friend</h2>
      </div>

      <h2 className={styles.h2FriendName}>{friend.name}</h2>
      <div className={styles.divPayField}>
        <p>Total amount to pay</p>
        <input
          className={styles.inputPayField}
          placeholder="$0.00"
          type="number"
          value={ctx.payFriendInput}
          onChange={ctx.handlerChangePayFriendInput}
        ></input>
      </div>
      <h2 className={styles.total}>{`Paying: $${
        ctx.payFriendInput
      } of $${Number(friend.debt).toFixed(2)}`}</h2>
      <p className={styles.left}>{`$${(
        Number(friend.debt).toFixed(2) - ctx.payFriendInput
      ).toFixed(2)} Left`}</p>
      <div className={styles.divWallet}>
        <p>Belanja Wallet</p>
        <p>{`💷 $${ctx.user.wallet}`}</p>
      </div>
      <div className={styles.divButton}>
        <button
          className={styles.buttonPayment}
          onClick={() =>
            ctx.handlerPayFriendSubmit({
              id: id,
              mode: "friendPaid",
              amount: ctx.payFriendInput,
              senderName: ctx.user.name,
              senderId: ctx.user.id,
              place: null,
            })
          }
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default PayFriend;
