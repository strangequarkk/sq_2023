import { useState, useEffect } from "react"
import { retrieveAllResumeItems } from "../services/resume.service"

/*
* Experience page: pulls resume items from API and displays them as articles
*/
export const Experience = () => { 
    const [resumeItems, setResumeItems] = useState([]);

      useEffect(() => {
        retrieveAllResumeItems(setResumeItems);
      }, [])
      const resumeEntries = resumeItems ? 
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
    //padding-top to ensure scrollto doens't cover title with nav bar
    return (
        <section id="experience" className="pt-12">
            <h2 className="font-heading text-3xl">Experience</h2>
            {resumeEntries}

        </section>
        
    )
}