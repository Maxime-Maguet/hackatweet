import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.leftContent}>
          <img src="/X-logo.png" alt="Logo" className={styles.logoX} />
          <div className={styles.userInfo}>
            <div className={styles.avatar}></div>
            <div className={styles.name}>
              <p>Firstname</p>
              <span>@username</span>
            </div>
          </div>
        </div>

        <div className={styles.middleContent}>
          <div className={styles.newTweet}>
            <h4>Home</h4>
            <input
              type="text"
              placeholder="What's up?"
              id="newTweet"
              maxLength={280}
            />
            <button className={styles.newTweet}>Tweet</button>
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
