import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img 
          // src={getImageUrl("contact/emailIcon.png")}
          src="./src/assets/contact/emailIcon.png"
           alt="Email icon" />
          <a href="mailto:myemail@email.com">sharvarisonulkar06@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            // src={getImageUrl("contact/linkedinIcon.png")}
            src="./src/assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sharwari-sonulkar-10718b22b/">Linkedin.com/in/sharwari-sonulkar-10718b22b/</a>
        </li>
        <li className={styles.link}>
          <img 
          // src={getImageUrl("contact/githubIcon.png")}
          src="./src/assets/contact/githubIcon.png"
           alt="Github icon" />
          <a href="https://www.github.com/Sharvari0602">github.com/Sharvari0602</a>
        </li>
      </ul>
      
    </footer>
  );
};