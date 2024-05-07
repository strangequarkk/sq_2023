import "./about-style.css";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { retrieveAboutContent } from "../../../services/about.service";

export const About = ({ setCurrentSection }) => {
  const [aboutContent, setAboutContent] = useState("");

  useEffect(() => {
    retrieveAboutContent(setAboutContent);
  }, []);
  const contentObj = { __html: aboutContent };
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          setCurrentSection("about");
        }
      }}
      partialVisibility={true}
    >
      <section id='about' tabIndex='2'>
        <h2 className='font-heading'>About</h2>
        <div
          className='about-content'
          dangerouslySetInnerHTML={contentObj}
        ></div>
      </section>
    </VisibilitySensor>
  );
};
About.propTypes = {
  setCurrentSection: PropTypes.func,
};
