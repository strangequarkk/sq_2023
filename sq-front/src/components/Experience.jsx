import { useState, useEffect } from "react"
import { retrieveAllResumeItems } from "../services/resume.service"

export const Experience = () => { 
    const [resumeItems, setResumeItems] = useState([]);
    const populateFromResponse = (response) => {
        setResumeItems(response.data)
      }
      useEffect(() => {
        retrieveAllResumeItems(populateFromResponse);
      }, [])
    
    return (
        <section id="experience">
            <h2 className="font-heading text-3xl">Experience</h2>
            {resumeItems ? 
                resumeItems.map((resumeItem) => (
                    <article key={resumeItem.id} className="resume-list-item">
                        <h2 >{resumeItem.title}</h2>
                        <h4 >{resumeItem.employer}</h4>
                        <p >{resumeItem.description}</p>
                        <p >{resumeItem.start_date}</p>
                        <p >{resumeItem.end_date}</p>
                      </article>
            )) : 
                <p>no items to show</p>
            }

        </section>
        
    )
}