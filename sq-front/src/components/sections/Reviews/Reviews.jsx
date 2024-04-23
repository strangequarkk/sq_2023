import { useEffect, useState } from "react";
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
import "./reviews-style.css";
//css file contains style overrides and button styling for the carousel

export const Reviews = ({
  containerWidth,
  themeIsDark,
  setCurrentSection,
  motionOkay,
  container = document.getElementById("root"),
}) => {
  const [reviews, setReviews] = useState({});

  //calculate how many cards to show in the viewport, based on viewport width
  const numCards = containerWidth / 400 < 1 ? 1 : containerWidth / 400;
  const [visibleCards, setVisibleCards] = useState(numCards);
  const lArrow = themeIsDark ? LeftArrowLight : LeftArrow;
  const rArrow = themeIsDark ? RightArrowLight : RightArrow;

  useEffect(() => {
    retrieveAllReviews(setReviews);
  }, []);

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

  const preventContainerScroll = () => {
    console.log(container.scrollTop);
    console.log("prevent container scroll?", container.scrollTop);
    container.style["height"] = "100vh";
    container.style["overflow-y"] = "hidden";
    console.log("prevent jump up?", container.scrollTop);
  };

  const allowContainerScroll = () => {
    console.log(
      "possibly no longer working because root overflow scroll set to visible?"
    );
    container.style["overflow-y"] = "auto";
    container.style["height"] = "auto";
  };

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
      <section
        id='reviews'
        onScroll={(e) =>
          console.log("reviews section scrolltop:", e.target.scrollTop)
        }
      >
        <h2 className='font-heading'>Reviews</h2>
        <br />
        <div
          onTouchStart={preventContainerScroll}
          onMouseDown={preventContainerScroll}
          onTouchEnd={allowContainerScroll}
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
};
