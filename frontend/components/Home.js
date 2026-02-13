import styles from "../styles/Home.module.css";
import TweetInput from "./Tweet";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/user";
import { AliwangwangOutlined, XOutlined } from "@ant-design/icons";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log(user);

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.leftContent}>
          <XOutlined
            className={styles.logoX}
            style={{ fontSize: "40px", color: "white" }}
          />
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              <AliwangwangOutlined
                style={{ fontSize: "32px", color: "#ffffff" }}
              />
            </div>
            <div className={styles.name}>
              <p>{user.firstname}</p>
              <span>@{user.username}</span>
            </div>
          </div>
        </div>

        <div className={styles.middleContent}>
          <div className={styles.newTweet}>
            <h4>Home</h4>
            <TweetInput />
          </div>
          <div className={styles.lastTweet}></div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.trends}>
            <h4>Trends</h4>
            <div className={styles.hashtags}>
              <p>#Hashtag1</p>
              <p>#Hashtag2</p>
              <p>#Hashtag3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
