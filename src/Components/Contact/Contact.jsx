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

             <div className={styles.social}>
                <ul className={styles.links}>
                 
                    <li className={styles.link}>
                        <img
                            src="/images/linkedinIcon.png"
                            alt="LinkedIn icon"
                            className={styles.img}
                        />
                        <a href="https://www.linkedin.com/in/webdev-nithin-suresh/" target='_blank'>linkedin.com/NITHIN SURESH</a>
                    </li>

                    <li className={styles.link}>
                        <img src="/images/githubIcon.png" alt="Github icon"  className={styles.img} />
                        <a href="https://github.com/Nithinonline" target='_blank'>github.com/Nithinonline</a>
                    </li>

                    <li className={styles.link}>
                        <img src="/images/IG.png" alt="IG icon"  className={styles.img} />
                        <a href="https://www.instagram.com/nithinify/" target='_blank'>instagram.com/nithinify</a>
                    </li>

                </ul>

                </div>
      
            </footer>

            </>

    );
};