import { useState, useEffect } from "react";
import { retrieveAllProjects } from "../../../services/projects.service";
import { ProjectCard } from "./ProjectCard";

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    retrieveAllProjects(setProjects);
  }, []);
  const projectCards =
    projects.length > 0 ? (
      projects.map((project) => {
        //make an object full of defaults so react doesn't freak out if something is null
        const defaultProjectProps = {};
        Object.keys(project).forEach((prop) => {
          defaultProjectProps[prop] = project[prop] ? project[prop] : "";
        });

        return <ProjectCard key={project.title} {...defaultProjectProps} />;
      })
    ) : (
      <p>no items to show</p>
    );

  return (
    <section id='portfolio' className='pt-12 max-w-[650px] mx-auto'>
      <h2 className='font-heading text-3xl'>Portfolio</h2>
      {projectCards}
    </section>
  );
};
