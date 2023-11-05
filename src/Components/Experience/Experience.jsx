import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";



export const Experience = () => { 
  return ( <>



    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>

          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p className={styles.items}>{skill.title}</p>
              </div>
            );
          })}
        </div>
        </div>
      </section>
        
        


      <section className={styles.container2}>  
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                 <div>
                  <h1 className={styles.historyItemDetails}>{historyItem.heading}</h1>
                  <p className={styles.historyItemDetails}>{historyItem.description}</p>
                 </div>
              </li>
            );
          })}
        </ul>
        </section>



      </>
  );
};