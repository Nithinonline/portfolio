import React from 'react'
import styles from "./ProjectCard2.module.css"
import { Projects } from './Project'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function NewProjects({ project: { title, imageSrc, description, demo, source } }) {

  return (

    <div>
      <article className={styles.card}>
        <header className={styles.card__thumb}>
          <a href="#">
            <img src={imageSrc} />
          </a>
        </header>
        <a href={source}  target='_blank' className={styles.card__git}>
          <GitHubIcon/>
        </a>
        <div className={styles.card__body}>
          <div className={styles.card__category}>
            <a href={demo} target='_blank'>Live</a>
          </div>
          <h2 className={styles.card__title}>
            <a href="#">{title}</a>
          </h2>
          <div className={styles.card__subtitle}>Technologies used:</div>
          <p className={styles.card__description}>{description} </p>
        </div>
        <footer className={styles.card__footer}>
          webdevnithin
        </footer>
      </article>
    </div>


  )
}
