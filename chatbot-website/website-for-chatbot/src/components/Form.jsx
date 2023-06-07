import styles from "./Form.module.css";

export const Form = ({ submitText, isPasswordHidden = false, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div>
      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" id="email" />
    </div>
    {!isPasswordHidden && (
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
    )}
    <button className={styles.submitButton}>{submitText}</button>
  </form>
);
