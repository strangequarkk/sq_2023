import PropTypes from 'prop-types'
import { useState, useEffect, useRef, useCallback } from 'react'
import { detectClickOut } from '../../../utils/detectClickout'
import {shiftElementLeft} from '../../../utils/shiftElementLeft'


const SubItem = ({ skill, builtWith }) => {
    const [showTTip, setShowTTip] = useState(false)
    const tTipFullWidth = useRef("");
    const hasRendered = useRef(false);
    const tTipElement = useRef()
    const skillElement = useRef()

    const shownStyles = useRef({
        shadow: "shadow-xl",
        zIndex: "z-10",
        opacity: "opacity-100"
    })

    const hiddenStyles = useRef({
        opacity: "opacity-0",
        shadow: "",
        zIndex: "",
    })

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
        className: "tooltip"
    })

    const buildClassString = (styleObj) => {
        return Object.values(styleObj).join(" ")
    }

    const[toolTipClasses, setToolTipClasses] = useState(buildClassString(toolTipStyles))
    const pClasses = "border border-solid rounded-full py-1 px-2 text-center inline-block"



    const changeTTipState = useCallback((tTipVisibility) => {

        const toggledWidth = tTipVisibility ? "0px" : tTipFullWidth.current;
        const toggledStyle = tTipVisibility ? hiddenStyles.current : shownStyles.current;
        //have to handle width style separately bc it's calculated dynamically in shiftElementLeft; 
        //tailwind can't build a custom style for it by the time we know what size we want
        tTipElement.current.style.width = toggledWidth;
        setToolTipStyles({ ...toolTipStyles, ...toggledStyle })
    }, [tTipFullWidth, hiddenStyles, shownStyles,toolTipStyles, tTipElement]);
    
    const handleClickOut = useCallback(() => {
        changeTTipState(true)
        setShowTTip(false)
    }, [changeTTipState]);

    const handleClick = () => {
        console.log("skillitem: handleclick")
        console.log("showTTip:", showTTip)
        changeTTipState(showTTip)
        setShowTTip(!showTTip)
    };

    useEffect(() => {


        if (tTipElement.current && !hasRendered.current) {
            console.log(tTipElement)
            const boundingRect = tTipElement.current.getBoundingClientRect()
            //save full width of tooltip to toggle from 0 later
            tTipFullWidth.current = parseInt(boundingRect.width) + "px";

            //adjust left position to prevent overflow if needed
            shiftElementLeft( boundingRect.right, tTipElement.current )
 
            //reset tooltip width to 0 for animation
            setToolTipStyles({ ...toolTipStyles, width: "w-0" });

            //clicking on the parent element toggles the tooltip visibility;
            //clicking on anything else makes the tooltip go away
            detectClickOut(skillElement.current, handleClickOut);

            //only need to do this once
            hasRendered.current = true;
        }

    }, [tTipElement, skillElement, hasRendered, toolTipStyles, changeTTipState, showTTip, handleClickOut ])

    //turn the new styles into class string every time they change
    useEffect(()=>{ setToolTipClasses(buildClassString(toolTipStyles))}, [toolTipStyles])

    
    const defaultItem = <li className= "grow" >
        <p className={pClasses + " border-teal-200"}>{skill}</p>
    </li>;

    const specialItem = <li className= "grow">
        <p ref={skillElement} onClick={handleClick} className={pClasses + " border-purple-400 relative cursor-pointer"} >{skill}
            <span ref={tTipElement} className={ toolTipClasses}>This site was built with {skill}!</span>
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