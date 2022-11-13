
import findProject from '../../utilities/findProject'
import { useParams } from 'react-router-dom'

function ProjectDetails() {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)
  console.log(projectDetails)
  return (
    <>
      <h1>{project.title}</h1>
      <div>
        <h2>{ project.description }</h2>
        <h2>{ project.details }</h2>
        <div>
          <a href={ project.deploymentLink }>
            <h3> { project.title } { project.title.src }</h3>
          </a>
        </div>
        <div>
          <a href={ project.repositoryLink } alt="repository link">
            <h3>GitHub Repository</h3>
          </a>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails