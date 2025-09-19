import React, { useEffect } from "react";
import styles from "./Homepage.module.css";
import photo from '../../images/157149457.jpeg';
import building from '../../images/52148898258_089d86bc03_o.jpg';
import github from '../../images/Octicons-mark-github.svg'
import linkedin from '../../images/linkedin-icon-logo-png-transparent.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Homepage = () => {
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    `.${styles.card}`,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
  );

  gsap.fromTo(
    `.${styles.blackNameText}, .${styles.grayNameText}`,
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 1, delay: 0.5, stagger: 0.2 }
  );

  gsap.fromTo(
    `.${styles.icon}`,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, delay: 1, stagger: 0.2, ease: "back.out(1.7)" }
  );

  // ✅ Media query for parallax
  ScrollTrigger.matchMedia({
    "(min-width: 1250px)": () => {
      const parallaxLayers = [
        { target: `.${styles.nameCard}`, x: -200, y: 0 },
        { target: `.${styles.photoCard}`, x: 0, y: -200 },
        { target: `.${styles.bioCard}`, x: 200, y: 0 },
        { target: `.${styles.buildingCard}`, x: 0, y: 150 },
        { target: `.${styles.projectCard}`, x: 0, y: 80 },
        { target: `.${styles.contactCard}`, x: 150, y: 100 }
      ];

      parallaxLayers.forEach(({ target, x, y }) => {
        gsap.to(target, {
          x,
          y,
          ease: "none",
          scrollTrigger: {
            trigger: `.${styles.container}`,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);
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
          <button
            className={styles.arrowButton}
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            &rarr;
          </button>
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
          <a href="https://github.com/bunjiro1213" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className={styles.icon} />
          </a>
          <a href="www.linkedin.com/in/bunjiro-yamada-339b71280" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
