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
}) => {
  const [reviews, setReviews] = useState({});
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
    //without height:auto, hiding overflow causes jump to top of the page
    root.style["height"] = "auto";
    //hiding overflow-y disables the buttons for some reason, so
    //don't do it if the user is trying to click on one
    if (!e.target.closest(".carouselButton") && !e.target.closest("button")) {
      root.style["overflow-y"] = "hidden";
    }
    e.stopPropagation();
  };

  const freezeMomentum = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  //resume normal behavior once swipe/drag event has ended
  const allowContainerScroll = () => {
    console.log("resume scroll behavior");
    root.style["overflow-y"] = "auto";
  };

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
      <section id='reviews'>
        <h2 className='font-heading'>Reviews</h2>
        <br />
        <div
          ref={sectionRef}
          onTouchStart={(e) => {
            console.log("touch start");
            preventContainerScroll(e);
          }}
          onTouchMove={(e) => {
            console.log("touch move:freeze");
            freezeMomentum(e);
          }}
          onMouseDown={(e) => {
            console.log("mouse down");
            preventContainerScroll(e);
          }}
          onMouseMove={(e) => {
            console.log("mouse move");
            preventContainerScroll(e);
          }}
          onTouchEnd={(e) => {
            console.log("touch end");
            allowContainerScroll(e);
          }}
          onTouchCancel={(e) => {
            console.log("touch cancel");
            allowContainerScroll(e);
          }}
          onMouseUp={(e) => {
            console.log("mouse up");
            allowContainerScroll(e);
          }}
          onMouseOut={(e) => {
            console.log("mouse out");
            allowContainerScroll(e);
          }}
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
};
