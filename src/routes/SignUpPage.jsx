import { useState, useContext } from "react";
import ProductContext from "../context/ProductContext";
import styles from "./SignUpPage.module.css";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Attempting sign-up with:", formData);

    const result = ctx.handlerSignUp(
      formData.name,
      formData.email,
      formData.mobile,
      formData.password
    );

    if (result?.error) {
      setErrorMessage(result.error); // Show alert message for duplicate registration
      return;
    }
    navigate("/home"); // Redirect user after sign-up
  };

  return (
    <div className={styles.divMain}>
      {errorMessage ? (
        <p className={styles.message}>{errorMessage}</p>
      ) : (
        <p className={styles.messageInactive}></p>
      )}
      <h2 className={styles.header}>Create your account</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>Name</label>
        <br></br>
        <input
          className={styles.input}
          name="name"
          type="text"
          placeholder="ex: wendy"
          onChange={handleChange}
          required
        />
        <br></br>
        <label className={styles.label}>Email</label>
        <br></br>
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="ex: wendy@gmail.com"
          onChange={handleChange}
          required
        />
        <br></br>
        <label className={styles.label}>Mobile</label>
        <br></br>
        <input
          className={styles.input}
          name="mobile"
          type="text"
          placeholder="81234567"
          onChange={handleChange}
          required
        />
        <br></br>
        <label className={styles.label}>Password</label>
        <br></br>
        <input
          className={styles.input}
          name="password"
          type="password"
          placeholder="••••••••"
          onChange={handleChange}
          required
        />

        <br></br>
        <button className={styles.buttonLongCreate} type="submit">
          Sign Up
        </button>
        <button className={styles.buttonLongBack} onClick={() => navigate("/")}>
          Back to Home
        </button>
      </form>
      <div className={styles.divHave}>
        <p className={styles.pHave}>Have an account?</p>
        <button
          className={styles.buttonSignIn}
          onClick={() => navigate("/login")}
        >
          SIGN IN
        </button>
      </div>

      {/* <h2>Create Account</h2>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          type="text"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <br />
      <button onClick={() => navigate("/")}>Back to Home</button> */}
    </div>
  );
}

export default SignUpPage;
