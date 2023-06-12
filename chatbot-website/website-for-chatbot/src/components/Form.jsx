import styles from "./Form.module.css";

export const Form = ({ submitText, isPasswordHidden = false, onSubmit }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <div className={styles.boxAuth}>
      <label className={styles.labelAuth} htmlFor="email">
        E-mail
      </label>
      <input
        className={styles.inputAuth}
        type="email"
        name="email"
        id="email"
      />
    </div>
    {!isPasswordHidden && (
      <div className={styles.boxAuth}>
        <label className={styles.labelAuth} htmlFor="password">
          Password
        </label>
        <input
          className={styles.inputAuth}
          type="password"
          name="password"
          id="password"
        />
      </div>
    )}
    <button className={styles.submitButton}>{submitText}</button>
  </form>
);
