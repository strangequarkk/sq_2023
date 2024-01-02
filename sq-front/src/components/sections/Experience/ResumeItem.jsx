import PropTypes from 'prop-types'
export const ResumeItem = ({ title, employer, description, start_date, end_date}) => {
    const start = start_date.split('-')[0]
    const end = end_date.split('-')[0]
    return (
        <article className="resume-list-item bg-white/50 rounded p-2 mt-3">
              <h2 className="italic text-lg" >{employer}</h2>
            
            <p className="flex justify-between text-sm italic px-2 m-auto"><span>{start}</span>
                {end}</p>
                <h4 className="font-bold">{title}</h4>
              <p className="text-sm p-1">{description}</p>

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