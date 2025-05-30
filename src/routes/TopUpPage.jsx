import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import styles from "./TopUpPage.module.css";

function TopUpPage() {
  const [amount, setAmount] = useState("");
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();
  const presetAmounts = [20, 50, 100, 200];
  const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Card");

  const handleConfirm = () => {
    const numericAmount = Number(amount);
    if (numericAmount > 0) {
        const fixedAmount = Number(numericAmount.toFixed(2));
        if (paymentMethod === "Paynow") {
            navigate("/paynow", { state: { amount: fixedAmount } });
        } else {
            ctx.dispatch({ type: "TOP_UP", value: fixedAmount, method: paymentMethod });
            navigate("/account");
        }
    } else {
        alert("Please enter a valid amount.");
    }
};

  return (
    <div className={styles.topupContainer}>
        <h1>Top-Up Wallet</h1>
        <label htmlFor="topupInput" className={styles.inputLabel}>
            Input Top Up Amount
        </label>

        <div className={styles.inputWrapper}>
            <span className={styles.dollarSign}>$</span>
            <input
                id="topupInput"
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value === "") {
                        setAmount(value);
                        return;
                    }

                    const [integer, decimal] = value.split(".");
                    if (decimal && decimal.length > 2) return;
                    if (!isNaN(value) && Number(value) >= 0) {
                        setAmount(value);
                    }
                }}
                placeholder="Enter amount"
                className={styles.amountInput}
            />
        </div>

        <div className={styles.walletDisplay}>
            Wallet Balance: ${Number(ctx.user.wallet).toFixed(2)}
        </div>

        <div className={styles.presetButtons}>
            {presetAmounts.map((value) => (
                <button key={value} onClick={() => setAmount(value)}>
                    ${value}
                </button>
            ))}
        </div>

        <div className={styles.paymentMethods}>
            <label className={styles.paymentLabel}>Select Payment Method:</label>
            <div className={styles.paymentOptions}>
                <label>
                    <input
                        type="radio"
                        value="Credit/Debit Card"
                        checked={paymentMethod === "Credit/Debit Card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Credit/Debit Card
                </label>
                <label>
                    <input
                        type="radio"
                        value="Paynow"
                        checked={paymentMethod === "Paynow"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Paynow
                </label>
            </div>
        </div>

        <button onClick={handleConfirm} className={styles.confirmButton}>
            Confirm
        </button>
    </div>
  );
}

export default TopUpPage;
