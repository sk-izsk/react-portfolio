import { kebabCase } from "lodash"
import fallbackImage from "../../assets/fallback-image.png"
import { Project } from "../../models"
import { IZSK } from "../base"
import styles from "./ProjectCard.module.css"

interface Props {
  project: Project
}

export const ProjectCard: IZSK.FC<Props> = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.image || fallbackImage} alt={project.name} />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles[kebabCase(tag)]}>
              <>{console.log("test", kebabCase(tag))}</>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
