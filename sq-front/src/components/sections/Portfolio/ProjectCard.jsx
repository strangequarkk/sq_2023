import PropTypes from 'prop-types'

export const ProjectCard = ({ title, link, description, cover_image, cover_video, project_skills, gallery_images }) => {
    const cover_path = cover_image.length ? cover_image.split('/src')[1] :""
    console.log("cover path", cover_path)
    const cover = cover_image.length ?
        <img src={cover_path}  />
        : "";


    const skills = project_skills.length ? project_skills.map((skillObj) => { 
        return <span className =" border-teal-200 bg-white/60 border border-solid rounded-full py-1 px-2 text-center inline-block mr-3" key={skillObj.skill}>{skillObj.skill} </span>
    }) : ""

    const video = cover_video.length ? <video src={cover_video}></video> : ""

    const gallery = gallery_images.length ? gallery_images.map((imgObj) => { 
        return <img key={imgObj.image}  src={imgObj.image} />
    }) : ""

    const descriptionObj = {__html:description}
        
    return (
        <article className="resume-list-item p-2 mt-3">
            <figure className="text-center m-aut max-h-72 overflow-hidden flex justify-center items-center">{cover}</figure>
            {video}
            <h2 className="text-xl font-nav font-bold m-3 text-center" ><a href={link}>{title}</a></h2>
            <h4 className="font-bold">Built with:</h4>
            <p className="mb-4">{skills}</p>
            <div dangerouslySetInnerHTML={descriptionObj}></div>
            {/* <div >{description}</div> */}
            <div>{gallery}</div>

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