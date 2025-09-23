import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import styles from "./projects.module.css";
import jacobproject from "../../images/Screenshot 2025-08-25 at 6.31.04 PM.png"; 
import njtransit from "../../images/35ce6002-810d-44b5-87c1-541bc636240a_3392x2264.jpg"
import kaggle from "../../images/Screenshot 2025-08-28 at 12.40.34 AM.png"

const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.card}`, {
      duration: 1000,
      distance: "50px",
      origin: "bottom",
      easing: "ease-in-out",
      interval: 0,   
      reset: true,
      viewFactor: 0
    });

    ScrollReveal().reveal(`.${styles.projectTitle}`, {
      duration: 800,
      distance: "20px",
      origin: "top",
      once: true
    });
  }, []);

  return (
    <div id="projects" className={styles.projectSection}>
      <h1 className={styles.projectTitle}>
        <span className={styles.blackText}>My </span>
        <span className={styles.grayText}>Projects</span>
      </h1>

      <div className={styles.cardsRow}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Jacob Oestreicher Coaching Web App</h2>
          <p className={styles.projectDescription}>
            Designed a Full-Stack Web App for an online coaching business.
          </p>
          <div className={styles.imageWrapper}>
            <img src={jacobproject} alt="Project Screenshot" className={styles.projectImage} />
          </div>
          <div className={styles.footerRow}>
            <div className={styles.tags}>
              <span className={styles.tag}>React.js</span>
              <span className={styles.tag}>Python/Django</span>
              <span className={styles.tag}>PostgreSQL</span>
              <span className={styles.tag}>Azure</span>
            </div>
            <button
              className={styles.expandButton}
              onClick={() => window.open("https://github.com/bunjiro1213/Personal-Trainer-App", "_blank")}
            >
              Open in GitHub
            </button>    
          </div>    
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>NJ Transit Delay Analysis</h2>
          <p className={styles.projectDescription}>
            Analyzed delays by modeling the network as a weighted graph and identifying key stations.
          </p>
          <div className={styles.imageWrapper}>
            <img src={njtransit} alt="NJ Transit Photo" className={styles.NJprojectImage} />
          </div>
          <div className={styles.footerRow}>
            <div className={styles.tags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>Rust</span>
              <span className={styles.tag}>Graph Algorithms</span>
              <span className={styles.tag}>Network Analysis</span>
            </div>
            <button className={styles.expandButton}>Open in GitHub</button>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Home Prices Predictor</h2>
          <p className={styles.projectDescription}>
            Built an end-to-end machine learning pipeline for price prediction.
          </p>
          <div className={styles.imageWrapper}>
            <img src={kaggle} alt="Home Prices Picture" className={styles.projectImage} />
          </div>
          <div className={styles.footerRow}>
            <div className={styles.tags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>Scikit-learn</span>
              <span className={styles.tag}>Pandas</span>
              <span className={styles.tag}>Matplotlib</span>
            </div>
            <button
              className={styles.expandButton}
              onClick={() => window.open("https://github.com/bunjiro1213/housing-prices", "_blank")}
            >
              Open in GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;