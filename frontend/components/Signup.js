import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login } from "../reducers/user";
import styles from "../styles/Signup.module.css";
import { XOutlined } from "@ant-design/icons";
function Signup(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [signUpFirstname, setsignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.result) {
          setsignUpFirstname("");
          setSignUpUsername("");
          setSignUpPassword("");
          props.close();
          router.push("/home");
          dispatch(
            login({
              firstname: signUpFirstname,
              username: signUpUsername,
              token: data.token,
            }),
          );
        } else {
          alert("Inscription échouée : " + data.error);
        }
      });
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerSection}>
        <XOutlined
          className={styles.logo}
          style={{ fontSize: "40px", color: "black" }}
        />
        <h3>Create your Hackatweet account</h3>
        <input
          onChange={(e) => setsignUpFirstname(e.target.value)}
          value={signUpFirstname}
          type="text"
          placeholder="Firstname"
          id="signUpFirstname"
        />

        <input
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
          type="text"
          placeholder="Username"
          id="signUpUsername"
        />
        <input
          onChange={(e) => setSignUpPassword(e.target.value)}
          value={signUpPassword}
          type="password"
          placeholder="Password"
          id="signUpPassword"
        />

        <button className={styles.signBtn} onClick={handleRegister}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Signup;
