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
  //const rem = parseInt(getComputedStyle(document.documentElement).fontSize);

  const animateFadeOut = (yPos, fadeElement, triggerPoint) => {
    //const triggerPoint = fadeElement.current.getBoundingClientRect().top - 80;

    if (yPos >= triggerPoint && yPos <= frameHeight) {
      console.log(yPos, triggerPoint, yPos - triggerPoint);
      fadeElement.current.style["opacity"] = triggerPoint / (yPos * 3);
      console.log("subt opacity:", triggerPoint / (yPos * 3));
      const yDiff = yPos - triggerPoint;
      fadeElement.current.style["transform"] = `translate(0, -${yDiff}px)`;
    } else if (yPos < triggerPoint) {
      console.log("reset styles");
      fadeElement.current.style["opacity"] = 1;
      fadeElement.current.style["transform"] = "";
      // console.log(fadeElement.current.style);
    }
  };

  useEffect(() => {
    setNameTriggerPoint(
      nameElement.current.getBoundingClientRect().top - frameHeight / 10
    );
    //setNameTriggerPoint(nameElement.current.getBoundingClientRect().top - 80);
    setSubtitleTriggerPoint(
      subtitleElement.current.getBoundingClientRect().top - 200
    );
  }, []);

  useContainerScroll((yPos) => {
    if (motionOkay) {
      animateFadeOut(yPos, nameElement, nameTriggerPoint);
      animateFadeOut(yPos, subtitleElement, subtitleTriggerPoint);
    }
  });

  return (
    <section id='intro' ref={frameElement}>
      <div className='title-wrap'>
        <h1 className='font-heading' ref={nameElement}>
          Kae
          <br />
          <span className='font-heading'>Unterseher</span>
        </h1>
      </div>
      <h2 className='font-heading' ref={subtitleElement}>
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
