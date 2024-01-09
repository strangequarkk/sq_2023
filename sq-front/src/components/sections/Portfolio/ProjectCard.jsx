import PropTypes from 'prop-types'

export const ProjectCard = ({ title, link, description, cover_image, cover_video, project_skills, gallery_images }) => {
    const cover_path = cover_image.length ? cover_image.split('/sq-front')[1] :""
    console.log("cover path", cover_path)
    const cover = cover_image.length ? <img src={cover_path} /> : "";
    const skills = project_skills.length ? project_skills.map((skillObj) => { 
        return <span key={skillObj.skill}>{skillObj.skill}</span>
    }) : ""
    const video = cover_video.length ? <video src={cover_video}></video> : ""
    const gallery = gallery_images.length ? gallery_images.map((imgObj) => { 
        return <img key={imgObj.image}  src={imgObj.image} />
    }) : ""
        
    return (
        <article className="resume-list-item p-2 mt-3">
            {cover}
            {video}
            <h2 className="italic text-lg" ><a href={link}>{title}</a></h2>
        
            {description}
            <div>{gallery}</div>
            <p>{skills}</p>
            </article>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    cover_image: PropTypes.string,
    cover_video: PropTypes.string,
    project_skills: PropTypes.array,
    gallery_images: PropTypes.array,
}

ProjectCard.defaultProps = {
    cover_image: "",
    cover_video: "",
    project_skills: [],
    gallery_images: []
}