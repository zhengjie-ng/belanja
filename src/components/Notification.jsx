import { useContext } from "react";
import ProductContext from "../context/ProductContext";

import styles from "./Notification.module.css";

function Notification({ id }) {
  const ctx = useContext(ProductContext);
  const currentBill = ctx.bills.find((bill) => bill.id === id);
  return (
    <div
      className={currentBill.settle ? styles.divMainSettled : styles.divMain}
    >
      <p>
        {currentBill.date.d} {currentBill.date.m} {currentBill.date.year}
      </p>
      <p>
        You have unsettled bill from{" "}
        <span className={styles.span}>{currentBill.name}</span>
      </p>
    </div>
  );
}

export default Notification;
