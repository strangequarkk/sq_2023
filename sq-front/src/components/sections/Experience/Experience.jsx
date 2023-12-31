import { useState, useEffect } from "react"
import { retrieveAllResumeItems } from "../../../services/resume.service"
import { ResumeItem } from "./ResumeItem";

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
        <ResumeItem key={resumeItem.id}{...resumeItem} />
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