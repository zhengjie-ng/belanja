import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PayNowPage.module.css";
import paynowImage from "../assets/paynow-image.png";

function PayNowPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const ctx = useContext(ProductContext);
  const amount =
    location.state && location.state.amount ? location.state.amount : 0;

  return (
    <div className={styles.paynowContainer}>
      <button className={styles.buttonBack} onClick={ctx.handlerClickBack}>
        󠀩󠁽≫
      </button>
      {/* <button className={styles.backButton} onClick={() => navigate("/topup")}>
                ← Back
            </button> */}

      <h1>Scan to Pay</h1>
      <p className={styles.instructionText}>
        Please scan the QR code with your banking app to pay $
        {amount.toFixed(2)}
      </p>
      <img src={paynowImage} alt="PayNow Info" className={styles.customImage} />
      <button
        onClick={() => {
          const fixedAmount = Number(amount.toFixed(2));
          ctx.dispatch({
            type: "TOP_UP",
            value: fixedAmount,
            method: "Paynow",
          });
          navigate("/account");
        }}
        className={styles.doneButton}
      >
        Done
      </button>
    </div>
  );
}

export default PayNowPage;
