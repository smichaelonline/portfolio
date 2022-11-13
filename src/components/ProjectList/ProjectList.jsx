import ProjectPreview from '../ProjectPreview/ProjectPreview'

function ProjectsList (props) {
  return (
    <>
      <ul>
        {props.projects.map((project, idx) =>
        <ProjectPreview project={project} key={idx}/>
        )}
      </ul>
    </>
  )
}

export default ProjectsList