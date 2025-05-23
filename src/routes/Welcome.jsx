import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css";

function Welcome() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className={styles.divWelcome}>
      <div className={styles.divTitle}>
        <img className={styles.logo} src="/logo.png" alt="Belanja Logo" />
        <h1 className={styles.title}>Belanja</h1>
      </div>

      <h2 className={styles.spend}>Welcome to Belanja!</h2>
      <p className={styles.spend}>Spend with us and earn rewards today!</p>

      <input
        className={styles.inputMobile}
        name="username"
        placeholder="Enter your mobile number "
        type="Number"
        required
      />

      <button className={styles.buttonLongCreate}>Create New Account</button>

      <p>Have a referral or reward code?</p>
      <button className={styles.buttonLong} onClick={handleLogin}>
        Login
      </button>
      <p className={styles.term}>
        By continuing, you agree to Belanja's{" "}
        <span style={{ textDecoration: "underline" }}>
          terms and conditions
        </span>{" "}
        and <span style={{ textDecoration: "underline" }}>privacy policy</span>
      </p>
    </div>
  );
}

export default Welcome;
