import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tweetBdd } from "../reducers/tweet";
import { useEffect } from "react";

function LastTweet() {
  const dispatch = useDispatch();
  const tweet = useSelector(state => state.user.value);
  const tweetData = useSelector(state => state.tweet.value);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/viewTweet")
      .then(res => res.json())
      .then(data => {
        if (data.result) {
          dispatch(tweetBdd(data.tweets));
        }
      });
  }, []);

  const tweets = tweetData.map((data, i) => {
    return <TweetModel key={i} {...data} />;
  });
  return <div>{tweets}</div>;
}

export default LastTweet;
