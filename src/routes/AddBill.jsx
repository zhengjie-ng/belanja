import styles from "./AddBill.module.css";
import { useState, useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

function AddBill() {
  const navigate = useNavigate();
  const ctx = useContext(ProductContext);
  //   const [showForm, setShowForm] = useState(false); // Controls input visibility
  const [billName, setBillName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  //   const [mode, setMode] = useState("split");

  const handleSubmitBill = (e) => {
    e.preventDefault();
    if (!billName || !payment || payment <= 0) {
      alert("Enter valid bill details!");
      return;
    }

    ctx.handlerAddMerchantBill({
      name: billName,
      payment,
      address,
      mode: "split",
    });
    // alert("Bill added successfully!");
    setBillName("");
    setPayment("");
    setAddress("");
    navigate("/bills");
  };
  return (
    <div>
      <button className={styles.buttonBack} onClick={ctx.handlerClickBack}>
        󠀩󠁽≫
      </button>

      <h2 className={styles.h2BelanjaPay}>Add Bill Manually</h2>
      <form className={styles.form} onSubmit={(e) => handleSubmitBill(e)}>
        <label className={styles.label}>Place Name</label>

        <input
          className={styles.input}
          type="text"
          placeholder="e.g. Starbucks"
          value={billName}
          onChange={(e) => setBillName(e.target.value)}
        />

        <label className={styles.label}>Address</label>

        <input
          className={styles.input}
          type="text"
          placeholder="Optional"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label className={styles.label}>Amount</label>

        <input
          className={styles.input}
          type="number"
          placeholder="0.00"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        />
        <p className={styles.pText}>* Manually added bills don't earn coins</p>
        <button className={styles.buttonLongCreate} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddBill;
