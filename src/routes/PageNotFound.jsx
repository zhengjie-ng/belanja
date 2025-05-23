import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div>
      <div className={styles.divMain}>
        <h1>✖️</h1>
        <h1>404</h1>
        <h2>Page not found </h2>
      </div>
    </div>
  );
}

export default PageNotFound;
