import PropTypes from 'prop-types'
import { useState, useEffect} from 'react'


const SubItem = ({ skill, builtWith }) => {
    const [isShown, setisShown] = useState(false)

    //breaking up the tailwind classes for legibility
    const [toolTipStyles, setToolTipStyles] = useState({
        position: "absolute -top-2/3 left-2/3",
        animation: "transition-all duration-200",
        decoration: "after:content-['✧'] after:text-purple-400 before:content-['✧'] before:text-purple-400 block",
        text: "whitespace-nowrap text-sm",
        border: "border border-solid border-purple-400 rounded-full",
        background: "bg-white",
        padding: "p-1 pr-1.5",
        overflow: "overflow-hidden",
        width: "w-0",
        opacity: "opacity-0",
        shadow: "",
        zIndex: "",
    })

    const buildClassString = (styleObj) => {
        return Object.values(styleObj).join(" ")
    }

    //toolTipClasses = toolTipStyles object collapsed into a string
    const[toolTipClasses, setToolTipClasses] = useState(buildClassString(toolTipStyles))
    const pClasses = "border border-solid rounded-full py-1 px-2 text-center inline-block"


    const handleClick = () => {
        const shownStyles = {
            width: "w-60",
            shadow: "shadow-xl",
            zIndex: "z-10",
            opacity: "opacity-100"
        }

        const hiddenStyles = {
            width: "w-0",
            opacity: "opacity-0",
            shadow: "",
            zIndex: "",
        }

        const toggledStyle = isShown ? hiddenStyles : shownStyles;

        setToolTipStyles({...toolTipStyles, ...toggledStyle})
        setisShown(!isShown)
    }

    useEffect(()=>{ setToolTipClasses(buildClassString(toolTipStyles))}, [toolTipStyles])

    
    const defaultItem = <li className= "grow" >
        <p className={pClasses + " border-teal-200"}>{skill}</p>
    </li>;

    const specialItem = <li className= "grow">
        <p className={pClasses + " border-purple-400 relative cursor-pointer"} onClick={handleClick}>{skill}
            <span className={ toolTipClasses}>This site was built with {skill}!</span>
            </p>
    </li>;

    const displayedItem = builtWith ? specialItem : defaultItem;

    return (
        <>{displayedItem}</>
        
    )
    
}
SubItem.propTypes = {
    skill: PropTypes.string,
    builtWith: PropTypes.bool
}

export const SkillItem = ({ skill, subItems }) => {
    const subComponents = subItems.length ? subItems.map((item) => {
        return(<SubItem key={item.skill} {...item} />)
    }) : [];
    const subList = subItems.length ? <ul className="flex flex-row text-sm font flex-wrap justify-around gap-2 px-4">
        {subComponents}
    </ul> : "";
    const styleClasses = subItems.length ? "font-bold mb-2" : "font-bold"
    return (
        <li className="bg-white/60 mb-1 p-2 rounded-lg">
            <h4 className={styleClasses}>{skill}</h4>
            {subList}
        </li>
    )

}

SkillItem.propTypes = {
    skill: PropTypes.string,
    subItems: PropTypes.array
}

SkillItem.defaultProps = {
    subItems: []
}