import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { retrieveAllResumeItems, deleteResumeItem } from "./../services/resume.service"

export const ResumeList = () => {
  const [resumeItems, setResumeItems] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const history = useNavigate();
  const countRef = useRef(0);

  const retrieveResponse = (response) => {
    setResumeItems(response.data)
  }
  useEffect(() => {
    retrieveAllResumeItems(retrieveResponse);
  }, [countRef])

  const handleUpdateClick = (id) => {
    history.push(`/restaurant/${id}/update/`);
  }
  const handleDeleteClick = (id) => {
    deleteResumeItem(id, () => {
      setDeleted(true);
      retrieveAllResumeItems(retrieveResponse);
    })
  }
  return (
<section>

            {deleted && (
              <div
                className=""
                role="alert"
              >
                Menu deleted!
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            {resumeItems &&
              resumeItems.map((resumeItem) => (
                <article key={resumeItem.id} className="resume-list-item">
                  <div className="resume-item-info">
                    <h2 >{resumeItem.title}</h2>
                    <h4 >{resumeItem.employer}</h4>
                    <p >{resumeItem.start_date}</p>
                    <p >{resumeItem.end_date}</p>
                  </div>
                  <div className="edit-buttons">
                        <button
                          onClick={() => handleUpdateClick(resumeItem.id)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteClick(resumeItem.id)}
                        >
                          Delete
                        </button>
                  </div>
                </article>
              ))}

        </section>

  );
};
