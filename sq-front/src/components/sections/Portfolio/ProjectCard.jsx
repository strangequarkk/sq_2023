import PropTypes from "prop-types";

export const ProjectCard = ({
  title,
  link,
  description,
  cover_image,
  cover_video,
  project_skills,
  gallery_images,
}) => {
  const cover_path = cover_image.length ? cover_image.split("/src")[1] : "";

  const cover = cover_image.length ? <img src={cover_path} /> : "";
  console.log("project cover:", cover);

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

  return (
    <article className='project-card'>
      <figure className='cover-image'>{cover}</figure>
      {video}
      <h3 className='font-nav'>
        <a href={link}>{title}</a>
      </h3>
      <details>
        <summary>View project details</summary>
        <h4>Built with:</h4>
        <p className='project-skills'>{skills}</p>
        <div dangerouslySetInnerHTML={descriptionObj}></div>
        <div>{gallery}</div>
      </details>
      <hr />
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
