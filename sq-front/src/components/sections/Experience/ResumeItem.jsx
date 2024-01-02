import PropTypes from 'prop-types'
export const ResumeItem = ({ title, employer, description, start_date, end_date}) => {
    const start = start_date.split('-')[0]
    const end = end_date.split('-')[0]
    return (
        <article className="resume-list-item p-2 mt-3">
              <h2 className="italic text-lg" >{employer}</h2>
            
            <p className="text-right text-sm italic w-100 m-auto"><span>{start}</span> - <span>{end}</span></p>
                <h4 className="font-bold">{title}</h4>
              <p className="text-sm  bg-white/50 rounded-lg p-2">{description}</p>

            </article>
    )
}

ResumeItem.propTypes = {
    id:PropTypes.number,
    title: PropTypes.string,
    employer: PropTypes.string,
    description: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
}