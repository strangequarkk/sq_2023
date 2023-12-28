import { SkillItem } from "./ui/SkillItem"
import { retrieveAllSkills } from "../services/skills.service"
import { useEffect, useState} from "react"

export const Skills = () => { 
    const [skills, setSkills] = useState([]);
    // const populateFromResponse = (response) => {
    //     setSkills(response.data)
    //   }
      useEffect(() => {
        retrieveAllSkills(setSkills);
      }, [])
    
    const skillItems = skills ? skills.map((skill) =>
        <SkillItem key={skill.name} skill={skill.name} subItems={skill.subskills.map((sub) => {
            return { skill: sub.name, builtWith: sub.built_with, order: sub.display_order }
        }
        )} />
    ) : <p>no items to show</p>
    
    //padding-top to ensure scrollto doens't cover title with nav bar
    return (
        <section id="skills" className="pt-12 max-w-100">
            <h2 className="font-heading text-3xl pb-3">Skills</h2>
            <article className="pb-4">
                <h3 className="font-nav pb-3">Languages, libraries, &amp; frameworks:</h3>
                <ul className="px-4">
                    {skillItems}
                </ul>
            </article>
            <article id="reviews">
                <h3 className="font-nav pb-2">Reviews:</h3>
                {/* <ul className="px-4 text-sm"> 
                    <li><strong>Curiosity-driven problem solving:</strong> I teach my students by example how to leave self-judgement out of the programming process, and embrace everything that a mistake can teach us about our tools.</li>
                    <li><strong>Creative communication: </strong>I use narrative communication techniques to clearly and memorably illustrate complex concepts.</li>
                    <li><strong>Patience and empathy:</strong> I uphold mutually respectful boundaries, and I never blame a student for struggling with a concept. I strive to match whatever pace my students and colleagues need.</li>
                </ul> */}
            </article>
        </section>
        
    )
}