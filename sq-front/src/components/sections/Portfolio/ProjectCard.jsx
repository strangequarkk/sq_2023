import PropTypes from "prop-types";
import { useState } from "react";

export const ProjectCard = ({
  title,
  // link,
  description,
  cover_image,
  cover_video,
  project_skills,
  gallery_images,
}) => {
  const [showDetails, setShowDetails] = useState(false);

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
    e.preventDefault();
    // if (showDetails) {
    //   document.documentElement.style.overflow = 'hidden';
    //   document.body.scroll = "no";
    // } else {

    // }
    setShowDetails(!showDetails);
  };

  const summaryMessage = showDetails ? "Close" : "View project details";
  const detailsOpen = showDetails ? "open" : "";
  return (
    <article onClick={toggleDetailsModal} className='project-card'>
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
      {/* <figure className='cover-image'>{cover}</figure> */}
      {video}

      <details open={detailsOpen}>
        <summary onClick={toggleDetailsModal}>{summaryMessage}</summary>

        <div dangerouslySetInnerHTML={descriptionObj}></div>
        <div>{gallery}</div>
      </details>
      {/* <hr /> */}
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
};

ProjectCard.defaultProps = {
  cover_image: "",
  cover_video: "",
  project_skills: [],
  gallery_images: [],
};
