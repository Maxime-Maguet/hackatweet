import { useState } from "react";



function TweetInput() {

const [text, setText] = useState("");


const handleClick = () => {

if(text.length === 0) return;

}
  return (
    <div>
      <div>
        <h2>What's up ?</h2>
        <input 
        placeholder="écrit ton tweet.." 
        maxLength={280} onChange={(e) => 
        setText(e.target.value)} 
        value={text}/> 
      </div>

      <footer>
        <p {...text.length}>0/280</p>
        <button onClick={handleClick}>Tweet</button>
      </footer>
    </div>
  );
}

export default TweetInput;
