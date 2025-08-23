import styles from "./skills.module.css";
import React from "react";
import boston from '../../images/51411176330_7e0606d6c0_o.jpg'

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsCard}>
        <h1>
          <span className={styles.blackText}>My</span>
          <br />
          <span className={styles.grayText}>Skills</span>
        </h1>
      </div>

      <div className={styles.skillsList}>
        <div className={styles.skillBubble}>Data Analysis</div>
        <div className={styles.skillBubble}>Machine Learning</div>
        <div className={styles.skillBubble}>Frontend Development</div>
        <div className={styles.skillBubble}>Backend Development</div>
      </div>

      <div className={styles.skillsImage}>
        <img src={boston} alt="Boston skyline" />
      </div>
    </div>
  );
};

export default Skills;
