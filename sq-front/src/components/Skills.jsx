import { SkillItem } from "./ui/SkillItem"

export const Skills = () => { 
    //padding-top to ensure scrollto doens't cover title with nav bar
    return (
        <section id="skills" className="pt-12 max-w-100">
            <h2 className="font-heading text-3xl pb-3">Skills</h2>
            <article className="pb-4">
                <h3 className="font-nav pb-3">Languages, libraries, &amp; frameworks:</h3>
                <ul className="px-4">
                    <SkillItem skill="HTML" subItems={[
                            {skill: "Semantic elements", builtWith: true }
                        ]}/>
                    <SkillItem skill="CSS"
                        subItems={[
                            { skill: "Tailwind", builtWith: true },
                            { skill: "Bootstrap" },
                            { skill: "LESS" },
                            { skill: "SCSS"}
                               ]} />
                    <SkillItem skill="Javascript"
                        subItems={[
                            { skill: "React", builtWith: true },
                            { skill: "D3.js" },
                            { skill: "p5.js" },
                            { skill: "jQuery"}
                        ]} />
                    <SkillItem skill="NodeJS"
                        subItems={[
                            { skill: "Next.js" },
                            { skill: "Express" },
                            {skill: "Mongoose"}
                        ]} />
                    <SkillItem skill="PHP"
                        subItems={[
                            {skill: "WordPress"}
                        ]} />
                    <SkillItem skill="Python"
                        subItems={[
                            {skill: "Django", builtWith: true}
                        ]} />
                    <SkillItem skill="SQL"
                        subItems={[
                            { skill: "sqlite", builtWith: true },
                            { skill: "MySQL" },
                            {skill: "PostgreSQL"}
                        ]} />
                </ul>
            </article>
            <article id="interpersonal-skills">
                <h3 className="font-nav pb-2">Interpersonal skills:</h3>
                <ul className="px-4 text-sm"> 
                    <li><strong>Curiosity-driven problem solving:</strong> I teach my students by example how to leave self-judgement out of the programming process, and embrace everything that a mistake can teach us about our tools.</li>
                    <li><strong>Creative communication: </strong>I use narrative communication techniques to clearly and memorably illustrate complex concepts.</li>
                    <li><strong>Patience and empathy:</strong> I uphold mutually respectful boundaries, and I never blame a student for struggling with a concept. I strive to match whatever pace my students and colleagues need.</li>
                </ul>
            </article>
        </section>
        
    )
}