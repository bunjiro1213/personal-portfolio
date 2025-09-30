import React from "react";
import styles from "./experiences.module.css";

const Experiences = () => {
  return (
    <div className={styles.ExperienceSection}>
      <h1 className={styles.title}>
        <span className={styles.blackText}>My </span>
        <span className={styles.grayText}>Experience</span>
      </h1>

      <div className={styles.experienceCard}>
        <div className={styles.header}>
          <h2 className={styles.role}>Data Science Intern</h2>
          <span className={styles.date}>Sep 2025 – Present</span>
        </div>
        <h3 className={styles.company}>Fizeek</h3>
        <p className={styles.description}>
          Collaborating with the founding team to design and implement
          data-driven features for a social fitness app focused on bodybuilding
          and workout progress tracking.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
