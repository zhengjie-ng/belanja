import styles from "./DebtLog.module.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ItemDebtLog from "../components/ItemDebtLog";

function DebtLog() {
  const { friendId } = useParams();
  const ctx = useContext(ProductContext);
  const friend = ctx.user.friends.find((friend) => friend.id === friendId);
  let header = (
    <div className={styles.pDetails}>{friend.name} and you are even.</div>
  );

  if (friend.debt > 0) {
    header = (
      <div className={styles.pDetails}>
        <span style={{ color: "red" }}>
          {`You owe ${friend.name} $${Number(friend.debt).toFixed(2)}`}.
        </span>
      </div>
    );
  } else if (friend.debt < 0) {
    header = (
      <div className={styles.pDetails}>
        <span style={{ color: "rgb(25, 176, 25)" }}>
          {friend.name} owes you ${Math.abs(friend.debt).toFixed(2)}.
        </span>
      </div>
    );
  }
  return (
    <div className={styles.divMain}>
      <div className={styles.divHeader}>
        <button className={styles.buttonBack} onClick={ctx.handlerClickBack}>
          󠀩󠁽≫
        </button>
        <h2 className={styles.header}>Debt Log</h2>
      </div>
      {header}
      {/* <p className={styles.debt}>{Number(friend.debt).toFixed(2)}</p> */}
      <div className={styles.divDebtLog}>
        {friend.debtLog?.map((debt) => (
          <ItemDebtLog
            key={debt.debtId}
            date={debt.date}
            senderId={debt.senderId}
            senderName={debt.senderName}
            newDebt={debt.newDebt}
            place={debt.place}
            mode={debt.mode}
          />
        ))}
      </div>
    </div>
  );
}

export default DebtLog;
