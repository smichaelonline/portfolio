import styles from './ProjectPreview.module.css'

const ProjectPreview = ({project}) => {
  return (
      <div>
        <section>
          <img src={project.image} alt="projects" className={styles.projectImg}></img>
          <div className={styles.allInfo}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <h5 className={styles.projectInfo}>{project.description}</h5>
            <div className={styles.buttonDiv}>
              <a href={project.repositoryLink} className={styles.projectGH}>Github Repo</a>
              <a href={project.deploymentLink} className={styles.projectLink}> Link to Site</a>
            </div>
          </div>
        </section>
      </div>
  );
};

export default ProjectPreview;