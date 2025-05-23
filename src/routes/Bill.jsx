import styles from "./Bill.module.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import Select from "react-select";
//https://react-select.com/home
import Payee from "../components/Payee";

function Bill() {
  const { id } = useParams();
  const ctx = useContext(ProductContext);
  const currentBill = ctx.bills.find((bill) => bill.id === id);

  const findUserAvatar = (userId) => {
    const user = ctx.userList.find((user) => user.id === userId);
    return user ? user.avatar : "https://i.pravatar.cc/100?u=unknown";
  };

  const friendOptions = ctx.user.friends.map((friend) => ({
    value: friend.id,
    label: friend.name,
    avatar: findUserAvatar(friend.id),
  }));

  return (
    <div className={styles.divMain}>
      <h2 className={styles.settlement}>Bill settlement options</h2>

      <h2 className={styles.h2BillName}>{currentBill.name}</h2>
      <Select
        className={styles.select}
        options={friendOptions}
        closeMenuOnSelect={false}
        isMulti
        onChange={ctx.handlerChangeInputPayee}
        placeholder="Select a friend..."
        formatOptionLabel={(friend) => (
          <div className={styles.divSelect}>
            <img
              src={friend.avatar}
              alt={friend.label}
              className={styles.imgAvatar}
            />
            <span>{friend.label}</span>
          </div>
        )}
      />
      <div className={styles.divOptions}>
        <button
          onClick={() => ctx.handlerClickBillSettleOption("=")}
          className={
            ctx.currentBill.mode === "="
              ? styles.buttonOptionsActive
              : styles.buttonOptions
          }
        >
          =
        </button>
        <button
          onClick={() => ctx.handlerClickBillSettleOption("split")}
          className={
            ctx.currentBill.mode === "split"
              ? styles.buttonOptionsActive
              : styles.buttonOptions
          }
        >
          1.23
        </button>
        <button
          onClick={() => ctx.handlerClickBillSettleOption("%")}
          className={
            ctx.currentBill.mode === "%"
              ? styles.buttonOptionsActive
              : styles.buttonOptions
          }
        >
          %
        </button>
        <button
          onClick={() => ctx.handlerClickBillSettleOption("belanja")}
          className={
            ctx.currentBill.mode === "belanja"
              ? styles.buttonBelanjaActive
              : styles.buttonBelanja
          }
        >
          BELANJA
        </button>
      </div>
      <div className={styles.divPayeeList}>
        {ctx.currentBill.fullPayeeList &&
          ctx.currentBill.fullPayeeList.map((payee) => (
            <Payee key={payee.id} id={payee.id} />
          ))}
      </div>
      <hr className={styles.hrLine}></hr>
      {ctx.currentBill.mode === "split" && (
        <>
          <h2 className={styles.total}>{`Total: $${
            ctx.currentBill.floatTotal
              ? Number(ctx.currentBill.floatTotal).toFixed(2)
              : "0.00"
          } of $${Number(ctx.currentBill.payment).toFixed(2)}`}</h2>
          <p className={styles.pLeft}>{`$${
            ctx.currentBill.floatTotal
              ? (
                  Number(currentBill.payment) -
                  Number(ctx.currentBill.floatTotal)
                ).toFixed(2)
              : Number(currentBill.payment).toFixed(2)
          } left`}</p>
        </>
      )}
      {ctx.currentBill.mode === "%" && (
        <>
          <h2 className={styles.total}>{`Total: ${
            ctx.currentBill.percentageTotal
              ? Math.round(ctx.currentBill.percentageTotal)
              : "0"
          }% of 100%`}</h2>
          <p className={styles.pLeft}>{`${
            ctx.currentBill.percentageTotal
              ? Math.floor(100 - Number(ctx.currentBill.percentageTotal))
              : 100
          }% left`}</p>
        </>
      )}
      {ctx.currentBill.mode === "=" && (
        <>
          <h2 className={styles.total}>{`Each will pay $${
            ctx.currentBill.equal
              ? ctx.currentBill.equal
              : ctx.currentBill.payment
          }`}</h2>
          <p className={styles.pLeft}>{`of $${ctx.currentBill.payment} `}</p>
        </>
      )}
      {ctx.currentBill.mode === "belanja" && (
        <>
          <h2 className={styles.total}>{`You will pay the full amount `}</h2>
          <p className={styles.pLeft}>{`of $${ctx.currentBill.payment} `}</p>
        </>
      )}

      <button className={styles.buttonSubmit} onClick={ctx.handlerBillSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Bill;
