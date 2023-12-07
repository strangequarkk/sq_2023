import { SkillItem } from "./ui/SkillItem"

export const Skills = () => { 
    //padding-top to ensure scrollto doens't cover title with nav bar
    return (
        <section id="skills" className="pt-12 max-w-100">
            <h2 className="font-heading text-3xl pb-3">Skills</h2>
            <article className="pb-4">
                <h3 className="font-nav pb-3">Languages, libraries, &amp; frameworks:</h3>
                <ul className="pl-4">
                    <SkillItem skill="HTML" />
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
            <article>
                <h3 className="font-nav">Interpersonal skills:</h3>
                <ul className="pl-4"> 
                    <li>Curiosity-driven problem solving</li>
                    <li>Creative metaphors and mnemonics</li>
                    <li>Patience and empathy</li>
                </ul>
            </article>
        </section>
        
    )
}