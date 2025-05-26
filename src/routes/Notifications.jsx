import styles from "./Notifications.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
import Notification from "../components/Notification";

function Notifications() {
  const ctx = useContext(ProductContext);

  // const findIfSettled = (id) => {
  //   const bill = ctx.bills.find((bill) => bill.id === id);
  //   return bill.settle;
  // };

  return (
    <div className={styles.divMain}>
      <div className={styles.divHeader}>
        <h2 className={styles.h2Header}>Notifications</h2>
        <hr className={styles.hrLine}></hr>
      </div>
      <div className={styles.divNotifications}>
        {ctx.user.notifications.list.map((notification) => (
          <Link
            key={notification.id}
            className={styles.link}
            onClick={() => ctx.handleNotificationClick(notification.id)}
          >
            <Notification id={notification.id} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
