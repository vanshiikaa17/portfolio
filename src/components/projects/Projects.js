import ProjectCard from "./ProjectCard";
import "./projects.css";
import data from "../../data.js";

const Projects = () => {
  return (
    <div id="projects">
      <h1>PROJECTS</h1>
      {data.map((d)=>(
        <ProjectCard title={d.title} img={d.img} github={d.github} link={d.link} shortdesc={d.shortdesc} key={d.title}/>

      ))}
    </div>
  )
}

export default Projects