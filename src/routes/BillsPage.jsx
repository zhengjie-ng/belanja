import styles from "./BillsPage.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ItemBill from "../components/ItemBill";
import { Link } from "react-router-dom";
import MerchantBillForm from "../components/MerchantBillForm";

function BillsPage() {
  const ctx = useContext(ProductContext);

  const findIfSettled = (id) => {
    const bill = ctx.bills.find((bill) => bill.id === id);
    return bill.settle;
  };

  return (
    <>
      {/* Merchant Bill Entry Form */}
    <div className={styles.billFormWrapper}>
      <div className={styles.billFormContainer}>
        <MerchantBillForm />
      </div>
    </div>

      <div className={styles.divHeader}>
        <h2 className={styles.h2Bills}>Bills</h2>
        <hr className={styles.hrLine}></hr>
      </div>

      <div className={styles.divBillList}>
        {ctx.bills &&
          ctx.bills.map((bill) => (
            <Link
              key={bill.id}
              className={styles.link}
              to={
                findIfSettled(bill.id)
                  ? `/bill/receipt/${bill.id}`
                  : `/bill/${bill.id}`
              }
              onClick={() => ctx.handlerBillClick(bill.id)}
            >
              <ItemBill key={bill.id} id={bill.id} />
            </Link>
          ))}
      </div>
    </>
  );
}

export default BillsPage;
