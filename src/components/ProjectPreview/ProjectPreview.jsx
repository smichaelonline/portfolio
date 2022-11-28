const ProjectPreview = ({project}) => {
  return (
      <div>
        <section>
          <h3>{project.title}</h3>
          <h5>{project.description}</h5>
          <a href={project.repositoryLink}>Github Repo</a>
          <a href={project.deploymentLink}> Link to Site</a>
        </section>
      </div>
  );
};

export default ProjectPreview;