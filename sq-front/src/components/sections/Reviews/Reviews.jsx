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
  wrapper,
  setPauseAnimations,
}) => {
  const [reviews, setReviews] = useState({});
  const [containerScrollTop, setContainerScrollTop] = useState(0);
  const sectionRef = useRef();

  //calculate how many cards to show in the viewport, based on viewport width
  const numCards = containerWidth / 400 < 1 ? 1 : containerWidth / 400;
  const [visibleCards, setVisibleCards] = useState(numCards);

  const lArrow = themeIsDark ? LeftArrowLight : LeftArrow;
  const rArrow = themeIsDark ? RightArrowLight : RightArrow;
  const root = container || document.getElementById("root");

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

  //without this, page scrolls vertically whenever the user tries to
  //horizontally swipe a review card
  const preventContainerScroll = (e) => {
    //collect original y position
    const oldWindowY = window.scrollY;
    setContainerScrollTop(oldWindowY);

    //hiding overflow-y disables the buttons for some reason, so
    //don't do it if the user is trying to click on one
    if (!e.target.closest(".carouselButton") && !e.target.closest("button")) {
      setPauseAnimations(true);

      //get rid of scrolling (and auto-jump to the top of the page oh no)
      root.style["height"] = "100vh";
      root.style["overflow-y"] = "hidden";

      //window scrollto doesn't work while scroll is disabled,
      //so use css transform to fake being in the right place on the page
      wrapper.current.style["transform"] = "translateY(-" + oldWindowY + "px)";
    }
  };

  //resume normal behavior once swipe/drag event has ended
  const allowContainerScroll = () => {
    root.style["height"] = "";
    root.style["overflow-y"] = "";
    wrapper.current.style["transform"] = "";
    //pretend you didn't just jump to the top of the page
    window.scrollTo({ top: containerScrollTop, behavior: "instant" });
    setPauseAnimations(false);
  };

  //make sure the page scrolls normally the next time the user
  //interacts with anything but the review slider
  useDetectClickOut(sectionRef.current, allowContainerScroll, true);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          setCurrentSection("reviews");
          //enable arrow key navigation of slider
          document.getElementById("review-slider").focus();
        }
      }}
    >
      <section id='reviews' ref={sectionRef}>
        <h2 className='font-heading'>Reviews</h2>
        <br />
        <div
          onTouchStart={preventContainerScroll}
          onMouseDown={preventContainerScroll}
          onTouchEnd={allowContainerScroll}
          onTouchCancel={allowContainerScroll}
          onMouseUp={allowContainerScroll}
          onMouseOut={allowContainerScroll}
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
};
