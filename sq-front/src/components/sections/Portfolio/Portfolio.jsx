import { useState, useEffect } from "react";
import { retrieveAllProjects } from "../../../services/projects.service";
import { ProjectCard } from "./ProjectCard";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from "prop-types";
import "./portfolio-style.css";

export const Portfolio = ({ setCurrentSection }) => {
  const [projects, setProjects] = useState([]);
  const [hasOpenProject, setHasOpenProject] = useState(false);

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

        return (
          <ProjectCard
            key={project.title}
            preventOpening={hasOpenProject}
            setPreventOpening={setHasOpenProject}
            {...defaultProjectProps}
          />
        );
      })
    ) : (
      <p>no items to show</p>
    );

  return (
    <VisibilitySensor
      partialVisibility={true}
      minTopValue={400}
      onChange={(isVisible) => {
        if (isVisible) {
          setCurrentSection("projects");
        }
      }}
    >
      <section id='projects'>
        <h2 className='font-heading'>Projects</h2>
        <div className='project-wrapper'>{projectCards}</div>
      </section>
    </VisibilitySensor>
  );
};
Portfolio.propTypes = {
  setCurrentSection: PropTypes.func,
};
