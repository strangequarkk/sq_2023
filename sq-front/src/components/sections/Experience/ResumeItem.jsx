import PropTypes from "prop-types";
export const ResumeItem = ({
  title,
  employer,
  description,
  start_date,
  end_date,
}) => {
  const start = start_date.split("-")[0];
  const end = end_date ? end_date.split("-")[0] : "Present";
  return (
    <div className='resume-list-item'>
      <h3>{employer}</h3>

      <p className='date-span'>
        <span>{start}</span> - <span>{end}</span>
      </p>
      <h4>{title}</h4>
      <p className='description'>{description}</p>
    </div>
  );
};

ResumeItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  employer: PropTypes.string,
  description: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
};
