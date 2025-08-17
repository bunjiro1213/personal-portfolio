import React from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buncard + ' ' + styles.nameCard}>
        <h1>
          <span className={styles.blackText}>Bunjiro</span>
          <br />
          <span className={styles.grayText}>Yamada</span>
        </h1>
      </div>

      <div className={styles.card + ' ' + styles.photoCard}>
        <img
          src="bunjiro-photo.jpg"
          alt="Bunjiro"
          className={styles.circleImage}
        />
      </div>

      <div className={styles.card + ' ' + styles.bioCard}>
        <p>
          <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
          Vestibulum odio arcu, efficitur nec risus ut, porta auctor lorem.
          <strong> Phasellus rutrum quam sed tincidunt varius.</strong> Suspendisse.
        </p>
      </div>

      <div className={styles.card + ' ' + styles.imageCard}>
        <img src="building.jpg" alt="building" className={styles.roundedImage} />
      </div>

      <div className={styles.card + ' ' + styles.projectCard}>
        <h2>
          <span className={styles.blackText}>See my latest</span>
          <br />
          <span className={styles.grayText}>work</span>
        </h2>
        <div className={styles.projectFooter}>
          <span className={styles.allProjects}>All Projects</span>
          <span className={styles.arrow}>&rarr;</span>
        </div>
      </div>

      <div className={styles.card + ' ' + styles.contactCard}>
        <h2>
          <span className={styles.blackText}>Contact</span>
          <br />
          <span className={styles.grayText}>me</span>
        </h2>
        <div className={styles.iconRow}>
          <img src="github-icon.png" alt="GitHub" className={styles.icon} />
          <img src="linkedin-icon.png" alt="LinkedIn" className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;