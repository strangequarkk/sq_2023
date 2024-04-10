import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useDetectClickOut } from "../../../utils/useDetectClickOutTwo";

export const ProjectCard = ({
  title,
  // link,
  description,
  cover_image,
  cover_video,
  project_skills,
  gallery_images,
  preventOpening,
  setPreventOpening,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsElement = useRef();
  const cardElement = useRef();

  //card should be hidden on clickout
  const handleClickOut = (e) => {
    if (
      e.target != cardElement.current &&
      !cardElement.current.contains(e.target) &&
      showDetails
    ) {
      setPreventOpening(false);
      setShowDetails(false);
    }
  };

  useDetectClickOut(cardElement.current, handleClickOut, showDetails);

  const skills = project_skills.length
    ? project_skills.map((skillObj) => {
        return (
          <span className='skill' key={skillObj.skill}>
            {skillObj.skill}{" "}
          </span>
        );
      })
    : "";

  const video = cover_video.length ? <video src={cover_video}></video> : "";

  const gallery = gallery_images.length
    ? gallery_images.map((imgObj) => {
        return <img key={imgObj.image} src={imgObj.image} />;
      })
    : "";

  //'description' comes from the django rich text editor; use __html: keyword to force react to insert it w/o escaping html characters
  const descriptionObj = { __html: description };
  const imageStyle = {
    backgroundImage: `url(${cover_image})`,
  };

  const toggleDetailsModal = (e) => {
    //clicking inside an open project is fine,
    //but clicking outside risks opening a second project underneath
    if (!e.target.closest(".project-content")) {
      e.preventDefault();
      //only open new project if there isn't a project already open
      //preventOpening is true if any project in section is already open
      //showDetails opens/closes this project only
      if (!preventOpening && !showDetails) {
        setPreventOpening(true);
        setShowDetails(true);
      } else if (preventOpening && showDetails) {
        setPreventOpening(false);
        setShowDetails(false);
      }
    }
  };

  const summaryMessage = showDetails ? "Close" : "View project details";
  const detailsOpen = showDetails ? "open" : "";
  return (
    <article
      ref={cardElement}
      onClick={toggleDetailsModal}
      className='project-card'
    >
      <div className='cover-image' style={imageStyle}>
        <h3 className='font-nav'>
          {title}
          {/* <a href={link}>{title}</a> */}
        </h3>
        <div className='built-with'>
          <h4>Built with:</h4>
          <p className='project-skills'>{skills}</p>
        </div>
      </div>
      {video}

      <details ref={detailsElement} open={detailsOpen}>
        <summary onClick={toggleDetailsModal}>{summaryMessage}</summary>

        <div
          className='project-content'
          dangerouslySetInnerHTML={descriptionObj}
        ></div>
        <div>{gallery}</div>
      </details>
    </article>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  cover_image: PropTypes.string,
  cover_video: PropTypes.string,
  project_skills: PropTypes.array,
  gallery_images: PropTypes.array,
  preventOpening: PropTypes.bool,
  setPreventOpening: PropTypes.func,
};

ProjectCard.defaultProps = {
  cover_image: "",
  cover_video: "",
  project_skills: [],
  gallery_images: [],
};
