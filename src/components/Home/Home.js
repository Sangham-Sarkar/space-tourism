import React from "react";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.Home}>
      <div class= {styles.Content}>
        <div class={styles.Info}>
          <h5>So, you want to travel to</h5>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well </p>
          <p>genuinely go to outer space and not hover kind of on the </p>
          <p>edge of it. Well sit back, and relax because we’ll give you a</p>
          <p>truly out of this world experience!</p>
        </div>  
        <div className={styles.Explore}>
          EXPLORE
        </div>
      </div>
    </div>
  );
}

export default Home;