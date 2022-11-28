import styles from './ProjectPreview.module.css'

const ProjectPreview = ({project}) => {
  return (
      <div>
        <section>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <img src={project.image} alt="projects" className={styles.projectImg}></img>
          <h5 className={styles.projectInfo}>{project.description}</h5>
          <a href={project.repositoryLink} className={styles.projectGH}>Github Repo</a>
          <a href={project.deploymentLink} className={styles.projectLink}> Link to Site</a>
        </section>
      </div>
  );
};

export default ProjectPreview;