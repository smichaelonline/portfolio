import {projects} from "../../data/projects"
import ProjectsList from "../../components/ProjectList/ProjectList"

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div>
        <ProjectsList projects={projects} />
      </div>
    </>
  )
}

export default Projects