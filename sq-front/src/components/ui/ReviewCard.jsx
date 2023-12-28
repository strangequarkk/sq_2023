import PropTypes from 'prop-types'
export const ReviewCard = ({ title, student, message, lessons}) => {

    return (
        <blockquote>
            <h4>{title}</h4>
            <p>{message}</p>
            <cite>{student}, {lessons} lessons</cite>
        </blockquote>
    )
}

ReviewCard.propTypes = {
    title: PropTypes.string,
    student: PropTypes.string,
    message: PropTypes.string,
    lessons: PropTypes.number
}