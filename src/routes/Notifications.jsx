import styles from "./Notifications.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
import Notification from "../components/Notification";

function Notifications() {
  const ctx = useContext(ProductContext);

  const findIfSettled = (id) => {
    const bill = ctx.bills.find((bill) => bill.id === id);
    return bill.settle;
  };

  return (
    <div className={styles.divMain}>
      <div className={styles.divHeader}>
        <h2 className={styles.h2Header}>Notifications</h2>
        <hr className={styles.hrLine}></hr>
      </div>
      <div className={styles.divNotifications}>
        {ctx.user.notifications.list.map((id) => (
          <Link
            key={id}
            className={styles.link}
            to={findIfSettled(id) ? `/bill/receipt/${id}` : `/bill/${id}`}
            onClick={() => ctx.handlerBillClick(id)}
          >
            <Notification id={id} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
