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

    const result = ctx.handlerSignUp(formData.name, formData.email, formData.mobile, formData.password);

    if (result?.error) {
      setErrorMessage(result.error); // Show alert message for duplicate registration
      return;
    }
      navigate("/home"); // Redirect user after sign-up
    };

  //   const handleRestart = () => {
  //   setFormData({ name: "", email: "", mobile: "", password: "" }); // ✅ Clear form
  //   setErrorMessage(""); // ✅ Remove error message
  // };

  return (
    <div className={styles.signUpContainer}>
      <h2>Create Account</h2>
      {/* {errorMessage && (
        <div className={styles.errorMessage}>
          <p>{errorMessage}</p>
          <button className={styles.restartButton} onClick={handleRestart}>Try Again</button>
        </div>
      )} */}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} {/* ✅ Display error message */}
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="mobile" type="text" placeholder="Mobile Number" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;

