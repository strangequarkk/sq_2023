import { useState } from "react";
import { createResumeItem } from "../services/resume.service";
import { Modal } from "./Modal";

export const AddResumeItem = () => {
  const initialState = {
    id: null,
    title: "",
    employer:"",
    description: "",
    start_date: "",
    end_date: ""
  }

  const [resumeItem, setResumeItem] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    console.log(resumeItem);
    setResumeItem({ ...resumeItem, [name]: value });
  }

  const populateAndConfirm = (response) => {
    setResumeItem({ ...response.data })
    setSubmitted(true);
    console.log(response.data)
  }

  const submitItem = () => {
    let data = { ...resumeItem }
    createResumeItem(data, populateAndConfirm)
  }

  const newItem = () => {
    setResumeItem(initialState);
    setSubmitted(false);
  }

  const preventFormRefresh = (e) => {
    e.preventDefault();
  }



  return (
      <form onSubmit={preventFormRefresh}> 
        {submitted ? (
          <div>
            <Modal message="Resume Item Added!" />
            <button onClick={newItem}>
              Add new
            </button>
          </div>
        ) : (
            <>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                required
                value={resumeItem.title}
                onChange={handleItemChange}
                name="title"
              />
              <label htmlFor="employer">Employer</label>
              <input
                type="text"
                id="employer"
                required
                value={resumeItem.employer}
                onChange={handleItemChange}
                name="employer"
              />
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                required
                value={resumeItem.description}
                onChange={handleItemChange}
                name="description"></textarea>
              <label htmlFor="start_date">Start date</label>
              <input
                type="date"
                value={resumeItem.start_date}
                onChange={handleItemChange}
                id="start_date"
                name="start_date"
              />
              <label htmlFor="end_date">End Date</label>
              <input
                type="date"
                value={resumeItem.end_date}
                onChange={handleItemChange}
                id="end_date"
                name="end_date"
              />
              <button onClick={submitItem}>
                Submit
              </button>
            </>
      ) }
      </form>

  );
};
