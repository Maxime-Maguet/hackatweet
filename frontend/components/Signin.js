import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";
import styles from "../styles/Signup.module.css";
import { useRouter } from "next/router";
import { XOutlined } from "@ant-design/icons";

function Signin(props) {
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
          router.push("/home");
          props.close();
        } else {
          alert("Identifiants incorrects");
        }
      });
  };

  return (
    <div className={styles.registerSection}>
      <XOutlined
        className={styles.logo}
        style={{ fontSize: "40px", color: "black" }}
      />
      <h3>Connect to Hackatweet</h3>
      <input
        type="text"
        placeholder="Username"
        id="signInUsername"
        onChange={(e) => setSignInUsername(e.target.value)}
        value={signInUsername}
      />
      <input
        type="password"
        placeholder="Password"
        id="signInPassword"
        onChange={(e) => setSignInPassword(e.target.value)}
        value={signInPassword}
      />
      <button className={styles.signBtn} onClick={() => handleConnection()}>
        Sign in
      </button>
    </div>
  );
}

export default Signin;
