import React from "react";
import styles from "./experiences.module.css";
import fizeekLogo from "../../images/fizeek-logo.jpg";
import ardelyxLogo from "../../images/ardelyx-logo.png";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Fizeek",
    date: "Sep 2025 – Jan 2026",
    image: fizeekLogo,
    imageAlt: "Fizeek logo",
    description:
      "Collaborating with the founding team to design and implement data-driven features for a social fitness app focused on bodybuilding and workout progress tracking.",
  },
  {
    role: "Market Access and Patient Services Analytics",
    company: "Ardelyx",
    date: "Jun 2026 – Present",
    image: ardelyxLogo,
    imageAlt: "Ardelyx logo",
    description:
      "Supporting analytics work across market access and patient services, translating data into practical insights for access strategy, operations, and patient support programs.",
  },
];

const Experiences = () => {
  return (
    <div className={styles.ExperienceSection}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Timeline</p>
        <h1 className={styles.title}>
          <span className={styles.blackText}>My </span>
          <span className={styles.grayText}>Experiences</span>
        </h1>
      </div>

      <div className={styles.timeline}>
        {experiences.map((experience) => (
          <article className={styles.timelineItem} key={experience.company}>
            <div className={styles.datePill}>{experience.date}</div>
            <div className={styles.marker} aria-hidden="true" />
            <div className={styles.experienceCard}>
              <div className={styles.cardContent}>
                <div className={styles.header}>
                  <p className={styles.company}>{experience.company}</p>
                  <h2 className={styles.role}>{experience.role}</h2>
                </div>
                <p className={styles.description}>{experience.description}</p>
              </div>
              {experience.image && (
                <img
                  src={experience.image}
                  alt={experience.imageAlt}
                  className={styles.experienceImage}
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
