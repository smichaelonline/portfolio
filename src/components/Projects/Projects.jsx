import {projects} from "../../data/projects"
import ProjectsList from "../../components/ProjectList/ProjectList"

function Projects() {
  return (
    <div id="projects">
      <h1>My Work</h1>
      <div>
        <ProjectsList projects={projects} />
      </div>
    </div>
  )
}

export default Projects