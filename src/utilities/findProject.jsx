import hyphenateWords from "./hyphenateWords";
import { projects } from "../data/projects";

function findProject(string) {
  const project = projects.find(({title}) => {
    return hyphenateWords(title) === string
  })
  return project
}

export default findProject