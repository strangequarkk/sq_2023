import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { retrieveAllReviews } from "../../../services/review.service";
import { ReviewCard } from "./ReviewCard";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import LeftArrow from "../../../assets/arrow-chevron-left.svg";
import RightArrow from "../../../assets/arrow-chevron-right.svg";
import LeftArrowLight from "../../../assets/arrow-chevron-left-light.svg";
import RightArrowLight from "../../../assets/arrow-chevron-right-light.svg";
import VisibilitySensor from "react-visibility-sensor";
import { useDetectClickOut } from "../../../utils/useDetectClickOutTwo";
import "./reviews-style.css";

export const Reviews = ({
  containerWidth,
  themeIsDark,
  setCurrentSection,
  motionOkay,
  container,
  setPauseAnimations,
  pauseAnimations,
  usingTouch,
}) => {
  const [reviews, setReviews] = useState({});
  const [containerScrollTop, setContainerScrollTop] = useState(0);
  const sectionRef = useRef();

  //calculate how many cards to show in the viewport, based on viewport width
  const numCards = containerWidth / 400 < 1 ? 1 : containerWidth / 400;
  const [visibleCards, setVisibleCards] = useState(numCards);

  const lArrow = themeIsDark ? LeftArrowLight : LeftArrow;
  const rArrow = themeIsDark ? RightArrowLight : RightArrow;

  useEffect(() => {
    retrieveAllReviews(setReviews);
  }, []);

  //number of visible cards changes if the width of the container changes
  useEffect(() => {
    setVisibleCards(numCards);
  }, [containerWidth, numCards]);

  const reviewCards =
    reviews.length > 0 ? (
      reviews.map((review) => {
        return (
          <Slide key={review.title} className=' flex' innerClassName='flex'>
            <ReviewCard {...review} />
          </Slide>
        );
      })
    ) : (
      <p>no reviews found</p>
    );
  const denyAnimation = motionOkay ? "" : "denyAnimation";

  const freezeYPos = (originalYPos) => {
    if (pauseAnimations) {
      if (container) {
        container.scrollTop = originalYPos;
      } else {
        window.scrollTo({ top: originalYPos, behavior: "instant" });
      }
    }
  };

  //without this, page scrolls vertically whenever the user tries to
  //horizontally swipe a review card
  const preventContainerScroll = (e) => {
    //collect original y position
    const oldWindowY = container ? container.scrollTop : window.scrollY;
    setContainerScrollTop(oldWindowY);
    if (!e.target.closest(".carouselButton") && !e.target.closest("button")) {
      //don't trigger color shift etc during a scroll that's about to be negated
      setPauseAnimations(true);
      //turn off scroll snapping of immediate siblings

      freezeYPos(oldWindowY);
    }
  };

  //resume normal behavior once swipe/drag event has ended
  const allowContainerScroll = () => {
    if (pauseAnimations) {
      setPauseAnimations(false);
    }
  };

  //make sure the page scrolls normally the next time the user
  //interacts with anything but the review slider
  useDetectClickOut(sectionRef.current, allowContainerScroll, true, usingTouch);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          setCurrentSection("reviews");
          //enable arrow key navigation of slider
          document.getElementById("review-slider").focus();

          //disable scroll snapping of neighbors
          //to prevent interference with forced scroll control
          document.querySelector("#reviews + section").style[
            "scroll-snap-stop"
          ] = "normal";
          document.querySelector("section:has( + #reviews").style[
            "scroll-snap-stop"
          ] = "normal";
        } else {
          //re-enable scroll snapping of neighbors if reviews section is not on screen
          document.querySelector("#reviews + section").style[
            "scroll-snap-stop"
          ] = "always";
          document.querySelector("section:has( + #reviews").style[
            "scroll-snap-stop"
          ] = "always";
        }
      }}
    >
      <section id='reviews' ref={sectionRef}>
        <h2 className='font-heading'>Reviews</h2>
        <br />
        <div
          onTouchStart={preventContainerScroll}
          onTouchMove={() => freezeYPos(containerScrollTop)}
          onMouseDown={preventContainerScroll}
          onMouseMove={() => freezeYPos(containerScrollTop)}
        >
          <CarouselProvider
            naturalSlideWidth={0}
            naturalSlideHeight={0}
            totalSlides={reviews.length}
            visibleSlides={visibleCards}
            lockOnWindowScroll={true}
          >
            <DotGroup dotNumbers={true} className='dot-group' />
            <div className='relative'>
              <ButtonBack>
                <span className='carouselButton'>
                  <img src={lArrow} alt='Back' />
                </span>
              </ButtonBack>
              <ButtonNext>
                <span className='carouselButton'>
                  <img src={rArrow} alt='Next' />
                </span>
              </ButtonNext>
              <Slider
                id='review-slider'
                classNameTray='flex'
                classNameAnimation={denyAnimation}
              >
                {reviewCards}
              </Slider>
            </div>
          </CarouselProvider>
        </div>
        <a href='wyzant.com/Tutors/KaeTutorsCS' className='source-link'>
          Check out my Wyzant profile for more student reviews!
        </a>
      </section>
    </VisibilitySensor>
  );
};
Reviews.propTypes = {
  containerWidth: PropTypes.number,
  themeIsDark: PropTypes.bool,
  setCurrentSection: PropTypes.func,
  motionOkay: PropTypes.bool,
  container: PropTypes.object,
  wrapper: PropTypes.object,
  setPauseAnimations: PropTypes.func,
  pauseAnimations: PropTypes.bool,
  usingTouch: PropTypes.bool,
};
