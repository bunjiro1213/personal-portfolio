import React from "react";
import styles from "./skills.module.css";
import { FaChartLine, FaBrain, FaCode, FaServer } from "react-icons/fa";

const Skills = () => {
  return (
    <div className={styles.skillsSection}>
      <h1 className={styles.title}>
        <span className={styles.blackText}>My </span>
        <span className={styles.grayText}>Skills</span>
      </h1>

      <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
          <FaChartLine className={`${styles.icon} ${styles.blue}`} />
          <h2>
            <span className={styles.highlightBlue}>Data Analysis</span>
          </h2>
          <p>Transform raw data into actionable insights.</p>
        </div>

        <div className={styles.skillCard}>
          <FaBrain className={`${styles.icon} ${styles.green}`} />
          <h2>
            <span className={styles.highlightGreen}>Machine Learning</span>
          </h2>
          <p>Build predictive models and intelligent systems.</p>
        </div>

        <div className={styles.skillCard}>
          <FaCode className={`${styles.icon} ${styles.purple}`} />
          <h2>
            <span className={styles.highlightPurple}>Frontend Development</span>
          </h2>
          <p>Create responsive, modern web interfaces.</p>
        </div>

        <div className={styles.skillCard}>
          <FaServer className={`${styles.icon} ${styles.orange}`} />
          <h2>
            <span className={styles.highlightOrange}>Backend Development</span>
          </h2>
          <p>Working with databases and learning server-side development fundamentals.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
