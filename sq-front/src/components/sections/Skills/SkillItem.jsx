import PropTypes from "prop-types";
import { useState, useEffect, useRef, useCallback } from "react";
import { detectClickOut } from "../../../utils/detectClickout";
import { shiftElementLeft } from "../../../utils/shiftElementLeft";

const SubItem = ({ skill, builtWith }) => {
  const [showTTip, setShowTTip] = useState(false);
  const tTipFullWidth = useRef("");
  const hasRendered = useRef(false);
  const tTipElement = useRef();
  const skillElement = useRef();
  const [toolTipClasses, setToolTipClasses] = useState("");

  const changeTTipState = useCallback(
    (tTipVisibility) => {
      const toggledWidth = tTipVisibility ? "0px" : tTipFullWidth.current;
      const toggledStyle = tTipVisibility ? "hidden" : "shown";
      //have to handle width style manually bc it's calculated dynamically on first render
      tTipElement.current.style.width = toggledWidth;
      setToolTipClasses(toggledStyle);
    },
    [tTipFullWidth, tTipElement]
  );

  const handleExit = useCallback(() => {
    changeTTipState(true);
    setShowTTip(false);
  }, [changeTTipState]);

  const handleOpen = () => {
    changeTTipState(showTTip);
    setShowTTip(!showTTip);
  };

  useEffect(() => {
    if (tTipElement.current && !hasRendered.current) {
      const boundingRect = tTipElement.current.getBoundingClientRect();
      //save full width of tooltip to toggle from 0 later
      tTipFullWidth.current = parseInt(boundingRect.width) + "px";

      //adjust left position to prevent overflow if needed
      shiftElementLeft(boundingRect.right, tTipElement.current);

      //reset tooltip width to 0 for animation
      setToolTipClasses("hidden");

      //clicking on the parent element toggles the tooltip visibility;
      //clicking on anything else makes the tooltip go away
      detectClickOut(skillElement.current, handleExit);

      //only need to do this once, but react convention does not allow empty dependency array in this case
      hasRendered.current = true;
    }
  }, [
    tTipElement,
    skillElement,
    hasRendered,
    toolTipClasses,
    changeTTipState,
    showTTip,
    handleExit,
  ]);

  const defaultItem = (
    <li className='skill-item'>
      <p>{skill}</p>
    </li>
  );

  const specialItem = (
    <li className='skill-item special'>
      <p
        ref={skillElement}
        onClick={handleOpen}
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
};

/*
 * Primary skill (language etc)
 */
export const SkillItem = ({ skill, subItems }) => {
  const subComponents = subItems.length
    ? subItems.map((item) => {
        return <SubItem key={item.skill} {...item} />;
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
};

SkillItem.defaultProps = {
  subItems: [],
};
