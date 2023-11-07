import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'


function Hero() {
    return (
        <section className={styles.container}>

            <div className={styles.content}>
                <h1 className={styles.title}><span className={styles.span}>Hey, I am</span> NITHIN SURESH</h1>
                <p className={styles.description}>
                Aspiring MERN stack developer, enthusiastic about crafting dynamic web applications and eager to contribute my skills in a dynamic development environment.
                </p>
               <a className={styles.contactBtn} href='https://drive.google.com/file/d/1NLXbSTUXojBmtgJOOCtlmEMbBcF_TzEX/view?usp=drive_link' target='_blank'> Download CV</a>
               
            </div>

            <img src="/images/profile2.png" alt="profile" className={styles.heroImg} />
           

            
        </section>
    )
}

export default Hero