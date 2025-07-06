import React from "react";
import styles from './homepage.module.css'

const Homepage = () => {
  return (
    <div className={styles.homepage} data-model-id="1:2">
      <div className={styles.div}>
        <div className={styles.overlap}>
          <div className={styles.rectangle} />

          <p className={styles["bunjiro-yamada"]}>
            <span className={styles["text-wrapper"]}>
              Bunjiro <br />
            </span>

            <span className={styles.span}>Yamada</span>
          </p>
        </div>

        <img
          className={styles.img}
          alt="Rectangle"
          src="https://c.animaapp.com/mcjh3hguLTu7SD/img/rectangle-4.png"
        />

        <div className={styles["overlap-group"]}>
          <p className={styles["see-my-latest-work"]}>
            <span className={styles["text-wrapper-2"]}>See my latest </span>

            <span className={styles["text-wrapper-3"]}>work</span>
          </p>

          <div className={styles["overlap-2"]}>
            <img
              className={styles.arrow}
              alt="Arrow"
              src="https://c.animaapp.com/mcjh3hguLTu7SD/img/arrow-11.svg"
            />

            <div className={styles["rectangle-2"]} />
          </div>

          <div className={styles["text-wrapper-4"]}>All Projects</div>
        </div>

        <div className={styles["div-wrapper"]}>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            odio arcu, efficitur nec risus ut, porta auctor lorem. Phasellus
            rutrum quam sed tincidunt varius. Suspendisse.
          </p>
        </div>

        <div className={styles["ellipse-wrapper"]}>
          <img
            className={styles.ellipse}
            alt="Ellipse"
            src="https://c.animaapp.com/mcjh3hguLTu7SD/img/ellipse-1.png"
          />
        </div>

        <div className={styles["overlap-group-2"]}>
          <div className={styles["rectangle-3"]} />

          <p className={styles["contact-me"]}>
            <span className={styles["text-wrapper"]}>
              Contact
              <br />
            </span>

            <span className={styles.span}>me</span>
          </p>

          <img
            className={styles.image}
            alt="Image"
            src="https://c.animaapp.com/mcjh3hguLTu7SD/img/image-1.png"
          />

          <img
            className={styles["image-2"]}
            alt="Image"
            src="https://c.animaapp.com/mcjh3hguLTu7SD/img/image-2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
