import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTweets } from "../reducers/tweet";

function TweetInput() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);
  const [text, setText] = useState("");

  console.log(user.token);

  const handleClick = () => {
    if (!user.token) {
      alert("vous n'êtes pas connecté");

      return;
    }

    fetch("http://localhost:3000/tweets/viewTweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: text,
        token: user.token, 
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          console.log("Tweet réussi :", data.tweet);
        setText("");
        dispatch(addTweets(data.tweet));
        }
      });

    
  };
  return (
    <div>
      <div>
        <h2>What's up ?</h2>
        <input
          placeholder="écrit ton tweet.."
          maxLength={280}
          onChange={e => setText(e.target.value)}
          value={text}
        />
      </div>

      <footer>
        <p>{text.length}/280</p>
        <button onClick={handleClick}>Tweet</button>
      </footer>
    </div>
  );
}

export default TweetInput;
