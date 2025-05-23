import styles from "./ScanPage.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

function ScanPage() {
  const ctx = useContext(ProductContext);

  return (
    <div className={styles.divMainWrapped}>
      <button className={styles.buttonBack} onClick={ctx.handlerClickBack}>
        󠀩󠁽≫
      </button>
      <div className={styles.divMain}>
        <h3 className={styles.h3Scan}>Scan a Belanja QR code to pay</h3>
        <div className={styles.divScan}></div>
        <button className={styles.buttonScan} onClick={ctx.handlerScanClick}>
          Scan
        </button>
      </div>
    </div>
  );
}

export default ScanPage;
