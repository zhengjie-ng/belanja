import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();
  const handlerBack = () => {
    navigate("/");
  };

  return (
    <div className={styles.divLogin}>
      <h1 className={styles.welcome}>Welcome back!</h1>
      <p>Get right back to earning Rewards!</p>
      <input
        className={styles.inputMobile}
        name="username"
        placeholder="Enter your mobile number or email address"
        value={ctx.loginNameInput}
        type="text"
        required
        onChange={ctx.handlerOnChangeInput}
      />
      <input
        className={styles.inputPassword}
        name="username"
        placeholder="Enter your password "
        type="password"
        required
      />
      <button
        className={styles.buttonLongCreate}
        onClick={ctx.handlerLoginClick}
      >
        Login
      </button>
      <button className={styles.buttonLong} onClick={() => navigate("/SignUpPage")}>Sign Up</button>
      <button className={styles.buttonLongBack} onClick={handlerBack}>
        Back
      </button>
    </div>
  );
}

export default LoginPage;
