import { useState } from "react";
import PropTypes from "prop-types";
import { useContainerScroll } from "../../../utils/useContainerScroll";
import handWave from "../../../assets/handwave.svg";
import closeIcon from "../../../assets/icon-close-circle.svg";
import "./hireMe-style.css"; //tailwind is unwieldy for custom animations

export const HireMe = ({ refContainer }) => {
  const [openAttr, setOpen] = useState("open");
  const [wave, setWave] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true); //prevents hover-induced extra wave animation

    removeWaveAnimation();
    const preventExtraWave = setTimeout(() => {
      setIsClosing(false);
      clearTimeout(preventExtraWave);
    }, 200);

    openAttr ? setOpen("") : setOpen("open");
  };

  const startWaveAnimation = () => {
    if (!wave && !isClosing) {
      setWave("waveActive");
    }
  };
  const removeWaveAnimation = () => {
    if (wave) {
      setWave("");
    }
  };

  useContainerScroll((scrollY) => {
    const pageEndHeight = refContainer
      ? refContainer.scrollHeight +
        refContainer.firstChild.getBoundingClientRect().top -
        refContainer.getBoundingClientRect().height -
        refContainer.firstChild.getBoundingClientRect().top
      : document.documentElement.scrollHeight - document.body.scrollHeight;

    if (scrollY >= pageEndHeight - 5) {
      setWave("waveActive");
    } else if (wave) {
      setWave("");
    }
  }, refContainer);

  const buttonContent = openAttr ? (
    <svg viewBox='0 0 24 24' width='30px'>
      <use xlinkHref={closeIcon + "#icon"}></use>
    </svg>
  ) : (
    "Let's get in touch!"
  );

  const buttonClass = openAttr ? "close" : "cta";

  return (
    <aside id='hire' className={openAttr + " " + wave + "-parent"}>
      {openAttr ? (
        <>
          <h2>Hire me!</h2>
          <p>
            <a
              className='underline'
              href="mailto:kae.unterseher@gmail.com?subject=Let's Work Together!"
            >
              kae.unterseher@gmail.com
            </a>
          </p>
          <p>(509) 308-5094</p>
          <p>
            Bluesky:{" "}
            <a className='underline' href='bsky.app/untercurrent'>
              @untercurrent
            </a>
          </p>
        </>
      ) : (
        <>
          <button
            type='button'
            aria-label='Open'
            onClick={handleClose}
            onMouseEnter={startWaveAnimation}
            onMouseLeave={removeWaveAnimation}
          >
            <svg viewBox='0 0 131 131' width='50px' className={wave}>
              <use xlinkHref={handWave + "#hand"}></use>
            </svg>
          </button>
        </>
      )}
      <button
        type='button'
        className={buttonClass}
        aria-label='Close'
        onClick={handleClose}
      >
        {buttonContent}
      </button>
    </aside>
  );
};

HireMe.propTypes = {
  refContainer: PropTypes.object,
};
