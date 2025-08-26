import React from "react";
import styles from "./projects.module.css";
import jacobproject from "../../images/Screenshot 2025-08-25 at 6.31.04 PM.png"; 

const Projects = () => {
  return (
    <div id="projects" className={styles.projectSection}>
      <h1 className={styles.projectTitle}>
        <span className={styles.blackText}>My </span>
        <span className={styles.grayText}>Projects</span>
      </h1>

      {/* 🔑 Wrap your cards in a row */}
      <div className={styles.cardsRow}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Jacob Oestreicher Coaching Web App</h2>
          <p className={styles.projectDescription}>
            Designed a Full-Stack Web App for an online coaching business.
          </p>
          <div className={styles.imageWrapper}>
            <img src={jacobproject} alt="Project Screenshot" className={styles.projectImage} />
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>React.js</span>
            <span className={styles.tag}>Python Django</span>
            <span className={styles.tag}>PostgreSQL</span>
            <span className={styles.tag}>Azure</span>
          </div>
          <button className={styles.expandButton}>Open in GitHub</button>
        </div>

        {/* Copy more cards inside cardsRow */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Another Project</h2>
          <p className={styles.projectDescription}>
            Short description of the second project.
          </p>
          <div className={styles.imageWrapper}>
            <img src={jacobproject} alt="Project Screenshot" className={styles.projectImage} />
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>React.js</span>
            <span className={styles.tag}>API</span>
            <span className={styles.tag}>UI Design</span>
          </div>
          <button className={styles.expandButton}>Open in GitHub</button>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Third Project</h2>
          <p className={styles.projectDescription}>
            Another coaching tool or app here.
          </p>
          <div className={styles.imageWrapper}>
            <img src={jacobproject} alt="Project Screenshot" className={styles.projectImage} />
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>Next.js</span>
            <span className={styles.tag}>TypeScript</span>
          </div>
          <button className={styles.expandButton}>Open in GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
