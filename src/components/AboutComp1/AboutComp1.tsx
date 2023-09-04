import { useState, useEffect } from "react"
import styles from "components/AboutComp1/AboutComp1.module.css";

const AboutComp1 = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const textToType = "GRD";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypewriterText(textToType.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{typewriterText}</h2>
        <div className={styles.content1}>
          <div className={styles.flexContainer}>
            <div className={styles.weContainer}>WE</div>
            <div className={styles.textContainer}>
              <p>Don’t Just Meet Expectations,</p>
              <p>Exceed Them.</p>
            </div>
          </div>
          <div className={styles.buttonsect}>
            <a href="#about"> <button className={styles.about}>About Us</button></a>
            <a href="#why">  <button className={styles.why}>Why Us ?</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp1;
