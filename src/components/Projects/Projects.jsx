import {projects} from "../../data/projects"
import ProjectsList from "../../components/ProjectList/ProjectList"
import styles from "./Projects.module.css"

function Projects() {
  return (
    <div id="projects">
      <h1 className={styles.work}>My Work</h1>
      <div>
        <ProjectsList projects={projects} />
      </div>
    </div>
  )
}

export default Projects