import styles from "../styles/Login.module.css";
import Signup from "./Signup";
import Signin from "./Signin";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img src="/X-logo.png" alt="Logo" className={styles.logoX} />
      </div>
      <div className={styles.rightSection}>
        <h1 className={styles.mainText}>See What's happening</h1>
        <h2 className="font-heavy">Join Hackatweet today.</h2>
        <div className={styles.buttonsContainer}>
          <button className={styles.signupButton}>Sign-up</button>
          <span>Already have an account?</span>
          <button className={styles.signinButton}>Sign-in</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
