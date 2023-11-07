import React from 'react'
import styles from "../About/About.module.css"

function About() {
    return (<>
        <section className={styles.container} id="about">
            {/* <h2 className={styles.title}>About</h2> */}
            <div className={styles.content}>
                <img
                    src="/images/about.png"
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage} />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="/images/FEicon.png" alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive
                                and optimized sites
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src="/images/BEicon.png" alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src="/images/DB.png" alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Database manager</h3>
                            <p>
                                I excel in designing and managing databases for performance and security
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <div className={styles.aboutDiv}>
            <h1 className={styles.head}>ABOUT</h1>
            <p className={styles.About}>
                I'm a dedicated MERN (MongoDB, Express, React, Node.js) stack developer with a BCA (Bachelor of Computer Applications) degree, driven by a deep passion for web development and a solid foundation in computer science. I excel in problem-solving and am a versatile full-stack developer, proficient in React, Node.js, Express, MongoDB, HTML, CSS, and JavaScript. Collaboration is at the core of my work, where my attention to detail and clean, efficient code make a difference. I'm committed to lifelong learning, constantly seeking to expand my skillset, and my ultimate goal is to become a recognized expert in web development, contributing to exciting projects and driving industry innovation. If you're looking for a developer who combines technical proficiency with a passion for excellence and growth, let's connect for potential collaborations, internships, or job opportunities.
            </p>
        </div>
    </>

    )
}

export default About