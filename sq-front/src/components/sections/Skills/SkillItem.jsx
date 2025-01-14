import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useDetectClickOut } from "../../../utils/useDetectClickOutTwo";
import { shiftElementLeft } from "../../../utils/shiftElementLeft";

const SubItem = ({ skill, builtWith, container }) => {
  const [showTTip, setShowTTip] = useState(false);
  const tTipFullWidth = useRef("");
  const hasRendered = useRef(false);
  const tTipElement = useRef();
  const skillElement = useRef();
  const [toolTipClasses, setToolTipClasses] = useState("");

  const changeTTipState = (tTipVisibility) => {
    const toggledWidth = tTipVisibility ? "0px" : tTipFullWidth.current;
    const toggledStyle = tTipVisibility ? "hidden" : "shown";
    //have to handle width style manually bc it's calculated dynamically on first render
    tTipElement.current.style.width = toggledWidth;
    setToolTipClasses(toggledStyle);
  };

  const handleExit = () => {
    changeTTipState(true);
    setShowTTip(false);
  };

  const handleOpen = () => {
    changeTTipState(showTTip);
    setShowTTip(!showTTip);
  };

  //clicking on the parent element toggles the tooltip visibility;
  //clicking on anything else makes the tooltip go away
  useDetectClickOut(skillElement.current, handleExit, showTTip);

  //position tooltip and calculate its natural width on first load
  useEffect(() => {
    if (tTipElement.current && !hasRendered.current) {
      const boundingRect = tTipElement.current.getBoundingClientRect();
      //save full width of tooltip to toggle from 0 later
      tTipFullWidth.current = parseInt(boundingRect.width) + "px";

      //adjust left position to prevent overflow if needed
      shiftElementLeft(boundingRect.right, tTipElement.current, container);

      //reset tooltip width to 0 for animation
      setToolTipClasses("hidden");

      //only need to do this once, but react convention does not allow empty dependency array in this case
      hasRendered.current = true;
    }
  }, [tTipElement, hasRendered, toolTipClasses, showTTip, container]);

  const defaultItem = (
    <li className='skill-item'>
      <p>{skill}</p>
    </li>
  );

  const specialItem = (
    <li className='skill-item special'>
      <p
        ref={skillElement}
        onMouseDown={handleOpen}
        onTouchStart={handleOpen}
        onMouseEnter={handleOpen}
        onMouseLeave={handleExit}
      >
        {skill}
        <span ref={tTipElement} className={toolTipClasses + " tooltip"}>
          This site was built with {skill}!
        </span>
      </p>
    </li>
  );

  const displayedItem = builtWith ? specialItem : defaultItem;

  return <>{displayedItem}</>;
};
SubItem.propTypes = {
  skill: PropTypes.string,
  builtWith: PropTypes.bool,
  container: PropTypes.object,
};

/*
 * Primary skill (language etc)
 */
export const SkillItem = ({ skill, subItems, container }) => {
  const subComponents = subItems.length
    ? subItems.map((item) => {
        return <SubItem key={item.skill} container={container} {...item} />;
      })
    : [];

  const subList = subItems.length ? (
    <ul className='subskill-list'>{subComponents}</ul>
  ) : (
    ""
  );

  const populatedStyle = subItems.length ? "has-subs" : "";

  return (
    <li className={" skill " + populatedStyle}>
      <h4>{skill}</h4>
      {subList}
    </li>
  );
};

SkillItem.propTypes = {
  skill: PropTypes.string,
  subItems: PropTypes.array,
  container: PropTypes.object,
};

SkillItem.defaultProps = {
  subItems: [],
};
