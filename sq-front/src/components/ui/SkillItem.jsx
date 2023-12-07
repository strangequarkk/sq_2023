import PropTypes from 'prop-types'
import { useState} from 'react'


const SubItem = ({ skill, builtWith }) => {
    const [infoClass, setInfoClass] = useState("hidden")
    const [toolTipWidth, setToolTipWidth] = useState(" w-0 ")
    const sparkleClasses = " after:content-['✧'] after:text-purple-400 before:content-['✧'] before:text-purple-400 block "
    const toolTipClasses = " absolute -top-2/3 whitespace-nowrap rounded-full overflow-hidden left-2/3 text-sm transition-all duration-200 p-1 pr-1.5 " + sparkleClasses 
    
    const commonClasses = " border border-solid rounded-full py-1 px-2 text-center inline-block "


    const handleClick = () => {
        const toggledClass = infoClass === "invisible" ?
            " visible border border-solid border-purple-400 shadow-xl bg-white z-10 " 
            : "invisible";
        const toggledWidth = infoClass === "invisible" ? " w-60  " : " w-0 " ;
        setToolTipWidth(toggledWidth)
        setInfoClass(toggledClass)
    }

 
    
    
    const defaultItem = <li className=" grow " >
        <p className={commonClasses + " border-teal-200"}>{skill}</p>
    </li>;
    const specialItem = <li className="grow">
        <p className={commonClasses + " border-purple-400 relative cursor-pointer"} onClick={handleClick}>{skill}
            <span className={ infoClass + toolTipClasses + toolTipWidth}>This site was built with {skill}!</span>
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
    const subList = subItems.length ? <ul className="flex flex-row flex-wrap justify-around gap-2 px-4">
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