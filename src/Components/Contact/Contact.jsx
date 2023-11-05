import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { ContactUs } from "./ContactUs";

export const Contact = () => {
    return (  <>            

  

            <footer id="contact" className={styles.container}>



                <div className={styles.text} id="#connect">
                    <h2>Contact</h2>
                    <p>Feel free to reach out!</p>
                    <ContactUs />
                </div >


                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src="images/emailIcon.png" alt="Email icon" />
                        <a href="mailto:nithinonline00055@gmail.com" target='_blank'>nithinonline00055@gmail.com</a>
                    </li>

                    <li className={styles.link}>
                        <img
                            src="images/linkedinIcon.png"
                            alt="LinkedIn icon"
                        />
                        <a href="https://www.linkedin.com/in/webdev-nithin-suresh/" target='_blank'>linkedin.com/NITHIN SURESH</a>
                    </li>

                    <li className={styles.link}>
                        <img src="images/githubIcon.png" alt="Github icon" />
                        <a href="https://github.com/Nithinonline" target='_blank'>github.com/Nithinonline</a>
                    </li>

                    <li className={styles.link}>
                        <img src="images/IG.png" alt="IG icon" />
                        <a href="https://www.instagram.com/nithinify/" target='_blank'>instagram.com/nithinify</a>
                    </li>

                </ul>

               
      
            </footer>

            </>

    );
};