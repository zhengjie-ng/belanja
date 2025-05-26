import { useContext } from "react";
import ProductContext from "../context/ProductContext";

import styles from "./Notification.module.css";

function Notification({ id }) {
  const ctx = useContext(ProductContext);
  const notification = ctx.user.notifications.list.find(
    (item) => item.id === id
  );

  let notificationSender = null;
  if (notification.mode === "friendPaid") {
    notificationSender = ctx.userList.find(
      (user) => user.id === notification.nameId
    );
  }

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
          <span className={styles.span}>{notification.name}</span> has paid you
          ${notification.amount}
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
