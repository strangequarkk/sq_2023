import "./intro-style.css";
import { useContainerScroll } from "../../../utils/useContainerScroll";
import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Intro = ({ motionOkay, splitLayoutIsActive }) => {
  const nameElement = useRef();
  const subtitleElement = useRef();
  const frameElement = useRef();
  const frameHeight = frameElement.current
    ? frameElement.current.getBoundingClientRect().height
    : 0;
  const [nameTriggerPoint, setNameTriggerPoint] = useState(0);
  const [subtitleTriggerPoint, setSubtitleTriggerPoint] = useState(0);

  const animateFadeOut = (yPos, fadeElement, triggerPoint) => {
    //activate fadeout at trigger point, but bring element back if we're below the intro frame
    if (yPos >= triggerPoint && yPos <= frameHeight) {
      fadeElement.current.classList.add("fadeOut");
    } else {
      fadeElement.current.classList.remove("fadeOut");
    }
  };

  useEffect(() => {
    const frameBounds = frameElement.current.getBoundingClientRect();

    const nameBounds = nameElement.current.getBoundingClientRect();
    //use difference between element top bound and frame top bound
    //instead of just element top bound
    //bc crazy preload stuff happens sometimes
    const nameDiff = nameBounds.top - frameBounds.top;
    setNameTriggerPoint(nameDiff - frameHeight / 10);

    const subTitleBounding = subtitleElement.current.getBoundingClientRect();
    const stDiff = subTitleBounding.top - frameBounds.top;
    setSubtitleTriggerPoint(stDiff - subTitleBounding.height / 2);
  }, [frameHeight]);

  useContainerScroll((yPos) => {
    if (motionOkay && !splitLayoutIsActive) {
      animateFadeOut(yPos, nameElement, nameTriggerPoint);
      animateFadeOut(yPos, subtitleElement, subtitleTriggerPoint);
    }
  });

  return (
    <section id='intro' ref={frameElement} tabIndex='1'>
      <div className='title-wrap'>
        <h1 className='font-heading fadeable' ref={nameElement}>
          Kae
          <br />
          <span className='font-heading'>Unterseher</span>
        </h1>
      </div>
      <h2 className='font-heading fadeable' ref={subtitleElement}>
        Full-Stack
        <br />
        <span className='font-heading line-2'>Developer</span>
        <span className='font-fancy ampersand'>&amp;</span>
        <span className='font-heading leading-[1.2rem] block'>Tutor</span>
      </h2>
    </section>
  );
};
Intro.propTypes = {
  motionOkay: PropTypes.bool,
  splitLayoutIsActive: PropTypes.bool,
};
