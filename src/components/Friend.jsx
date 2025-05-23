import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import styles from "./Friend.module.css";

function Friend({ id, debt }) {
  const ctx = useContext(ProductContext);
  const friend = ctx.userList.find((user) => user.id === id);

  let debtStatement = (
    <div className={styles.pDetails}>{friend.name} and you are even.</div>
  );

  let actionButton = null;

  if (debt > 0) {
    debtStatement = (
      <div className={styles.pDetails}>
        <span style={{ color: "red" }}>
          You owe {friend.name} ${debt}.
        </span>
      </div>
    );
    actionButton = <button className={styles.buttonActionPay}>Pay</button>;
  } else if (debt < 0) {
    debtStatement = (
      <div className={styles.pDetails}>
        <span style={{ color: "green" }}>
          {friend.name} owes you ${Math.abs(debt)}.
        </span>
      </div>
    );
    actionButton = <button className={styles.buttonActionNotify}>Nudge</button>;
  }

  return (
    <div className={styles.divFriend}>
      <div className={styles.divFriendInner}>
        <img
          className={styles.imgFriend}
          src={friend.avatar}
          alt={friend.name}
        ></img>
        <div className={styles.divDetails}>
          <p className={styles.pName}>{friend.name}</p>
          {debtStatement}
        </div>
        <div className={styles.divAction}>{actionButton}</div>
      </div>
    </div>
  );
}

export default Friend;
