export const Skills = () => { 
    //padding-top to ensure scrollto doens't cover title with nav bar
    return (
        <section id="skills" className="pt-8">
            <h2 className="font-heading text-3xl">Skills</h2>
            <article>
                <h3 className="font-nav">Languages, libraries, &amp frameworks:</h3>
                <ul>
                    <li><h4 className="font-bold">HTML</h4></li>
                    <li><h4 className="font-bold">CSS</h4>
                        <ul>
                            <li className="highlighted">Tailwind <span className="hidden">This site was built with Tailwind</span></li>
                            <li>Bootstrap</li>
                            <li>LESS</li>
                            <li>SCSS</li>
                        </ul>
                    </li>
                    <li><h4 className="font-bold">Javascript</h4>
                        <ul>
                            <li className="highlighted">React<span className="hidden">This site was built with React</span></li>
                            <li>D3.js</li>
                            <li>p5.js</li>
                            <li>jQuery</li>
                        </ul>
                    </li>
                    <li><h4 className="font-bold">NodeJS</h4>
                        <ul>
                            <li>Next.js</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                        </ul>
                    </li>
                    <li><h4 className="font-bold">PHP</h4>
                        <ul>
                            <li>WordPress</li>
                        </ul>
                    </li>
                    <li><h4 className="font-bold">Python</h4>
                        <ul>
                            <li className="highlighted">Django<span className="hidden">This site was built with Django</span></li>
                        </ul>
                    </li>
                </ul>
            </article>
            <article>
                <h3 className="font-nav">Interpersonal skills:</h3>
                <ul> 
                    <li>Curiosity-driven problem solving</li>
                    <li>Creative metaphors and mnemonics</li>
                    <li>Patience and empathy</li>
                </ul>
            </article>
        </section>
        
    )
}