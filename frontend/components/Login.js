import styles from "../styles/Login.module.css";
import Signup from "./Signup";
import Signin from "./Signin";
import { useState } from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const user = useSelector((state) => state.user.value);
  console.log(user);

  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isSigninVisible, setIsSigninVisible] = useState(false);

  const openSignup = () => {
    setIsSignupVisible(true);
  };

  const closeSignup = () => {
    setIsSignupVisible(false);
  };

  const openSignin = () => setIsSigninVisible(true);
  const closeSignin = () => setIsSigninVisible(false);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img src="/X-logo.png" alt="Logo" className={styles.logoX} />
      </div>
      <div className={styles.rightSection}>
        <h1 className={styles.mainText}>See What's happening</h1>
        <h2 className="font-heavy">Join Hackatweet today.</h2>
        <div className={styles.buttonsContainer}>
          <button onClick={openSignup} className={styles.signupButton}>
            Sign-up
          </button>

          <div id="react-modals">
            <Modal
              className={styles.modal}
              open={isSignupVisible}
              centered
              footer={null}
              onCancel={closeSignup}
            >
              <Signup close={closeSignup} />
            </Modal>
          </div>

          <span>Already have an account?</span>
          <button onClick={openSignin} className={styles.signinButton}>
            Sign-in
          </button>
          <div id="react-modals">
            <Modal
              className={styles.modal}
              open={isSigninVisible}
              centered
              footer={null}
              onCancel={closeSignin}
            >
              <Signin close={closeSignin} />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
