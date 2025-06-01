import styles from "./Paidyee.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

function Paidyee({ id }) {
  const ctx = useContext(ProductContext);

  const user = ctx.userList.find((user) => user.id === id);
  const payee = ctx.currentBill.fullPayeeList.find((payee) => payee.id === id);

  return (
    <div className={styles.divMain}>
      <img className={styles.imgPayee} src={user.avatar} alt={user.name}></img>
      <h4>
        {user.name}
        {user.name === ctx.user.name && (
          <span className={styles.span}> (You)</span>
        )}
      </h4>
      <div className={styles.divSpace}></div>
      {payee.final !== 0 ? (
        <p className={styles.pFinal}>{`$${Number(payee.final).toFixed(2)}`}</p>
      ) : (
        <p className={styles.pThanks}>Thanks for the treat!</p>
      )}
    </div>
  );
}

export default Paidyee;
