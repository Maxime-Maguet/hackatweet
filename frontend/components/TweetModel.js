import styles from "../styles/TweetModel.module.css";
import TweetInput from "./Tweet";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AliwangwangOutlined,
  XOutlined,
  HeartFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { deleteTweet } from "../reducers/tweet";

export default function TweetModel(props) {
  const dispatch = useDispatch();

  const HandleDelete = () => {
    dispatch(deleteTweet(props._id));
  };
  return (
    <>
      <div className={styles.tweet}>
        <AliwangwangOutlined style={{ fontSize: "32px", color: "#ffffff" }} />
        <div className={styles.userInfo}>
          <p>{props.user?.firstname}</p>
          <span>@{props.user?.username}</span>
        </div>
        <div className={styles.textContent}>
          <p>{props.content}</p>
        </div>
        <div className={styles.icon}>
          <HeartFilled style={{ fontSize: "32px", color: "#ffffff" }} />
          {props.likes?.length}
          <DeleteFilled
            onClick={HandleDelete}
            style={{ fontSize: "32px", color: "#ffffff" }}
          />
        </div>
      </div>
    </>
  );
}
