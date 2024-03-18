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

  const bgClasses = openAttr
    ? " opacity-100 " + openAttr
    : " " + wave + "-parent";

  return (
    <aside
      className={" bg-white fixed text-sm leading-[1.4rem] z-50" + bgClasses}
    >
      {openAttr ? (
        <>
          <h2 className='text-lg font-bold'>Hire me!</h2>
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

          <button
            type='button'
            className='close absolute top-1 left-1 closeBtn '
            aria-label='Close'
            onClick={handleClose}
          >
            <svg
              viewBox='0 0 24 24'
              width='30px'
              className='absolute -top-3 -left-3'
            >
              <use xlinkHref={closeIcon + "#icon"}></use>
            </svg>
          </button>
        </>
      ) : (
        <>
          <p className='cta'>Contact me!</p>
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
    </aside>
  );
};

HireMe.propTypes = {
  refContainer: PropTypes.object,
};
