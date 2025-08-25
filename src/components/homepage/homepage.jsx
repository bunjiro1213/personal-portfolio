import React from "react";
import styles from "./Homepage.module.css";
import photo from '../../images/157149457.jpeg';
import building from '../../images/52148898258_089d86bc03_o.jpg';

const Homepage = () => {
  return (
    <div className={styles.container}>
      {/* Name Card */}
      <div className={`${styles.card} ${styles.nameCard}`}>
        <h1>
          <span className={styles.blackNameText}>Bunjiro </span>
          <span className={styles.grayNameText}>Yamada</span>
        </h1>
      </div>

      {/* Photo Card */}
      <div className={`${styles.card} ${styles.photoCard}`}>
        <img src={photo} alt="Bunjiro" className={styles.circleImage} />
      </div>

      {/* Bio Card */}
      <div className={`${styles.card} ${styles.bioCard}`}>
        <p className={styles.bioText}>
          <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
          Vestibulum odio arcu, efficitur nec risus ut, porta auctor lorem.
          <strong> Phasellus rutrum quam sed tincidunt varius.</strong> Suspendisse.
        </p>
      </div>

      {/* Image Card */}
      <div className={`${styles.card} ${styles.buildingCard}`}>
        <img src={building} alt="Building" className={styles.roundedImage} />
      </div>

      {/* Projects Card */}
      <div className={`${styles.card} ${styles.projectCard}`}>
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

      {/* Contact Card */}
      <div className={`${styles.card} ${styles.contactCard}`}>
        <h2>
          <span className={styles.blackContactText}>Contact</span>
          <br />
          <span className={styles.grayContactText}>me</span>
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
