import "./intro-style.css";
import { useContainerScroll } from "../../../utils/useContainerScroll";
import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Intro = (motionOkay) => {
  const nameElement = useRef();
  const subtitleElement = useRef();
  const frameElement = useRef();
  const frameHeight = frameElement.current
    ? frameElement.current.getBoundingClientRect().height
    : 0;
  const [nameTriggerPoint, setNameTriggerPoint] = useState(0);
  const [subtitleTriggerPoint, setSubtitleTriggerPoint] = useState(0);

  const animateFadeOut = (yPos, fadeElement, triggerPoint) => {
    if (yPos >= triggerPoint && yPos <= frameHeight) {
      fadeElement.current.classList.add("fadeOut");
    } else if (yPos < triggerPoint) {
      fadeElement.current.classList.remove("fadeOut");
    }
  };

  useEffect(() => {
    setNameTriggerPoint(
      nameElement.current.getBoundingClientRect().top - frameHeight / 10
    );

    setSubtitleTriggerPoint(
      subtitleElement.current.getBoundingClientRect().top - frameHeight / 8
    );
  }, [frameHeight]);

  useContainerScroll((yPos) => {
    if (motionOkay) {
      animateFadeOut(yPos, nameElement, nameTriggerPoint);
      animateFadeOut(yPos, subtitleElement, subtitleTriggerPoint);
    }
  });

  return (
    <section id='intro' ref={frameElement}>
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
};
