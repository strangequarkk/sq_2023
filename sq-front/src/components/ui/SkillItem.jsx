import PropTypes from 'prop-types'
import { useState, useEffect, useRef} from 'react'


const SubItem = ({ skill, builtWith }) => {
    const [isShown, setisShown] = useState(false)
    const tTipFullWidth = useRef("");
    const hasRendered = useRef(false);

    //breaking up the tailwind classes for legibility
    const [toolTipStyles, setToolTipStyles] = useState({
        position: "absolute -top-2/3",
        leftPos: "left-2/3",
        animation: "transition-all duration-200",
        decoration: "after:content-['✧'] after:text-purple-400 before:content-['✧'] before:text-purple-400 block",
        text: "whitespace-nowrap text-sm",
        border: "border border-solid border-purple-400 rounded-full",
        background: "bg-white",
        padding: "p-1 pr-1.5",
        overflow: "overflow-hidden",
        width: "",
        opacity: "opacity-0",
        shadow: "",
        zIndex: "",
    })

    const buildClassString = (styleObj) => {
        return Object.values(styleObj).join(" ")
    }

    const[toolTipClasses, setToolTipClasses] = useState(buildClassString(toolTipStyles))
    const pClasses = "border border-solid rounded-full py-1 px-2 text-center inline-block"

    //adjust left position to prevent overflow if needed
    const shiftElementLeft = (rightBound, el) => {
        if (rightBound > window.innerWidth) {
            const overflowX = rightBound - window.innerWidth;
            // element's current position minus how far it overflowed off the viewport
            const newLeftPos = (parseInt(window.getComputedStyle(el).left) - overflowX)
            el.style.left = `${parseInt(newLeftPos)}px`;
        }
    }

    //tooltip starts at full width so it can be measured & adjusted
    const setUpToolTip = (el) => {
        if (el && !hasRendered.current) {

            const boundingRect = el.getBoundingClientRect()
            //save full width of tooltip to toggle from 0 later
            tTipFullWidth.current = parseInt(boundingRect.width) + "px";

            //adjust left position to prevent overflow if needed
            shiftElementLeft( boundingRect.right, el )
 
            //reset tooltip width to 0 for animation
            setToolTipStyles({ ...toolTipStyles, width: "w-0" });

            //only need to do this once
            hasRendered.current = true;
        }

    }


    const handleClick = (e) => {
        const shownStyles = {
            shadow: "shadow-xl",
            zIndex: "z-10",
            opacity: "opacity-100"
        }

        const hiddenStyles = {
            opacity: "opacity-0",
            shadow: "",
            zIndex: "",
        }

        const toggledWidth = isShown ? "0px" : tTipFullWidth.current;
        const toggledStyle = isShown ? hiddenStyles : shownStyles;
        const spanElement = e.target.querySelector('span');

        spanElement.style.width = toggledWidth;
        setToolTipStyles({...toolTipStyles, ...toggledStyle})
        setisShown(!isShown)
    }

    //turn the new styles into class string every time they change
    useEffect(()=>{ setToolTipClasses(buildClassString(toolTipStyles))}, [toolTipStyles])

    
    const defaultItem = <li className= "grow" >
        <p className={pClasses + " border-teal-200"}>{skill}</p>
    </li>;

    const specialItem = <li className= "grow">
        <p className={pClasses + " border-purple-400 relative cursor-pointer"} onClick={handleClick}>{skill}
            <span ref={setUpToolTip} className={ toolTipClasses}>This site was built with {skill}!</span>
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

    const styleClasses = subItems.length ? "mb-2" : "";

    return (
        <li className="bg-white/60 mb-1 p-2 rounded-lg">
            <h4 className={"font-bold " + styleClasses}>{skill}</h4>
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