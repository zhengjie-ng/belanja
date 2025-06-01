import styles from "./ScanPage.module.css";
import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";

function ScanPage() {
  const ctx = useContext(ProductContext);

  async function updateLocation() {
    try {
      if (!navigator.geolocation) {
        console.log("Location is not supported by your browser");
        return;
      }
      navigator.geolocation.getCurrentPosition((position) => {
        ctx.dispatch({
          type: "UPDATE_LOCATION",
          latlong: position.coords.latitude + "," + position.coords.longitude,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    updateLocation();
  }, []);

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
