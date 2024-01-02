import PropTypes from 'prop-types'
export const ReviewCard = ({ title, student, message, lessons}) => {

    return (
        <blockquote className=" p-3 flex flex-col justify-between">
            <div>
            <h4 className="font-bold pb-2">{title}</h4>
                <p>{message}</p>
                </div>
            <cite className="self-baseline block text-right w-full ">{student}, {lessons} lessons</cite>
        </blockquote>
    )
}

ReviewCard.propTypes = {
    title: PropTypes.string,
    student: PropTypes.string,
    message: PropTypes.string,
    lessons: PropTypes.number
}