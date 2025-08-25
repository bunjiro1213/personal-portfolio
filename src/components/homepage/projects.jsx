import React from "react";
import styles from "./projects.module.css";
import jacobproject from "../../images/Screenshot 2025-08-25 at 6.31.04 PM.png"; 

const Projects = () => {
  return (
    <div className={styles.projectSection}>
      <h1 className={styles.projectTitle}>
        <span className={styles.blackText}>My </span>
        <span className={styles.grayText}>Projects</span>
      </h1>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Jacob Oestreicher Coaching Web App</h2>
        <div className={styles.imageWrapper}>
          <img src={jacobproject} alt="Project Screenshot" className={styles.projectImage} />
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>Fullstack development</span>
          <span className={styles.tag}>UI/UX Design</span>
        </div>
        <button className={styles.expandButton}>Open in GitHub</button>
      </div>
    </div>
  );
};

export default Projects;
