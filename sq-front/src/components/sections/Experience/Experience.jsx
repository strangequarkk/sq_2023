import { useState, useEffect } from "react";
import { retrieveAllResumeItems } from "../../../services/resume.service";
import { ResumeItem } from "./ResumeItem";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from "prop-types";
import "./experience-style.css";
/*
 * Experience page: pulls resume items from API and displays them as articles
 */
export const Experience = ({ setCurrentSection }) => {
  const [resumeItems, setResumeItems] = useState([]);

  useEffect(() => {
    retrieveAllResumeItems(setResumeItems);
  }, []);
  const resumeEntries = resumeItems ? (
    resumeItems.map((resumeItem) => (
      <ResumeItem key={resumeItem.id} {...resumeItem} />
    ))
  ) : (
    <p>no items to show</p>
  );
  //padding-top to ensure scrollto doens't cover title with nav bar
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          setCurrentSection("experience");
        }
      }}
    >
      <section id='experience'>
        <h2 className='font-heading'>Experience</h2>
        {resumeEntries}
      </section>
    </VisibilitySensor>
  );
};
Experience.propTypes = {
  setCurrentSection: PropTypes.func,
};
