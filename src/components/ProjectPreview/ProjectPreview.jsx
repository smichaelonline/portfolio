import { Link } from "react-router-dom";
import hyphenateWords from "../../utilities/hyphenateWords";

const ProjectPreview = ({project}) => {
  const path = hyphenateWords(project.title)
  return (
      <div>
        <section>
          <h3>{project.title}</h3>
          <Link to={path}>Learn More</Link>
          <a href={project.repositoryLink}>Github Repo</a>
        </section>
      </div>
  );
};

export default ProjectPreview;