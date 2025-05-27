import { useContext } from "react";
import ProductContext from "../context/ProductContext";

import styles from "./Notification.module.css";

function Notification({ uuid }) {
  const ctx = useContext(ProductContext);
  const notification = ctx.user.notifications.list.find(
    (item) => item.uuid === uuid
  );

  let notificationSender = null;
  if (notification.mode === "friendPaid" || notification.mode === "nudge") {
    notificationSender = ctx.userList.find(
      (user) => user.id === notification.senderId
    );
  }

  const Statement = () => {
    switch (notification.mode) {
      case "friendPaid":
        return (
          <>
            <span className={styles.span}>{notification.senderName}</span> has
            <span style={{ color: "green", fontWeight: "500" }}> Paid</span> you
            ${notification.amount}
          </>
        );
      case "nudge":
        return (
          <>
            <span className={styles.span}>{notification.senderName}</span> has
            <span style={{ color: "red", fontWeight: "500" }}> Nudged</span> you
            for payment of ${Number(notification.amount).toFixed(2)}
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div
      className={notification.notify ? styles.divMain : styles.divMainInactive}
    >
      <img
        className={styles.img}
        src={notificationSender.avatar}
        alt="image of notification sender"
      />
      <div className={styles.divName}>
        <p className={styles.pName}>
          <Statement />
        </p>
        <p className={styles.pDate}>
          {notification.date.d} {notification.date.Month} {notification.date.y}
        </p>
      </div>
      {notification.notify && <p className={styles.dot}>●</p>}
    </div>
  );
}

export default Notification;
