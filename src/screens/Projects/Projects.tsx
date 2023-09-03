import styled from "styled-components"
import { IZSK, ProjectCard } from "../../components"
import { projects } from "../../data"
import styles from "./Projects.module.css"

const Projects: IZSK.FC = () => {
  return (
    <StyledDiv>
      <StyledH3>Stuff I've Built So Far</StyledH3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  padding: 0 1rem;
`

const StyledH3 = styled.h3`
  color: var(--text-color);
`

export default Projects
