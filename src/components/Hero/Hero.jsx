import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sharwari </h1>
        <p className={styles.description}>
        I am an undergraduate software Engineer based in Nagpur,Maharashtra, proficient in coding, designing, and optimizing
 websites to deliver exceptional user experiences. With a passion for innovation and a commitment to quality, I consistently
 strive to exceed expectations in every project I undertake.
        </p>
        <a href="mailto:sharvarisonulkar06@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        // src={getImageUrl("hero/heroImage.png")}
        img src="./src/assets/hero/img.jpeg"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};