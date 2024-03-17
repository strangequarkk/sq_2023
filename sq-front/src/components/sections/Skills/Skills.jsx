import { SkillItem } from "./SkillItem";
import { retrieveAllSkills } from "../../../services/skills.service";
import { useEffect, useState } from "react";

export const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    retrieveAllSkills(setSkills);
  }, []);

  const skillItems = skills ? (
    skills.map((skill) => (
      <SkillItem
        key={skill.name}
        skill={skill.name}
        subItems={skill.subskills.map((sub) => {
          return {
            skill: sub.name,
            builtWith: sub.built_with,
            order: sub.display_order,
          };
        })}
      />
    ))
  ) : (
    <p>no items to show</p>
  );

  return (
    <section id='skills' className='pt-12 max-w-[650px] mx-auto'>
      <h2 className='font-heading text-3xl pb-3'>Skills</h2>
      <article className='pb-4'>
        <h3 className='font-nav pb-3'>
          Languages, libraries, &amp; frameworks:
        </h3>
        <ul className='px-4'>{skillItems}</ul>
      </article>
    </section>
  );
};
