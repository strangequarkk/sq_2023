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
import "./reviews-style.css";
//css file contains style overrides and button styling for the carousel

export const Reviews = ({ containerWidth }) => {
  const [reviews, setReviews] = useState({});

  //calculate how many cards to show in the viewport, based on viewport width
  const numCards = containerWidth / 400 < 1 ? 1 : containerWidth / 400;
  const [visibleCards, setVisibleCards] = useState(numCards);

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
  return (
    <section id='reviews'>
      <h2 className='font-heading'>Reviews</h2>
      <br />

      <CarouselProvider
        naturalSlideWidth={0}
        naturalSlideHeight={0}
        totalSlides={reviews.length}
        visibleSlides={visibleCards}
      >
        <DotGroup dotNumbers={true} className='dot-group' />
        <div className='relative'>
          <ButtonBack>
            <span className='carouselButton'>
              <img src={LeftArrow} alt='Back' />
            </span>
          </ButtonBack>
          <ButtonNext>
            <span className='carouselButton'>
              <img src={RightArrow} alt='Next' />
            </span>
          </ButtonNext>
          <Slider classNameTray='flex'>{reviewCards}</Slider>
        </div>
      </CarouselProvider>
      <a href='wyzant.com/Tutors/KaeTutorsCS' className='source-link'>
        Check out my Wyzant profile for more student reviews!
      </a>
    </section>
  );
};
Reviews.propTypes = {
  containerWidth: PropTypes.number,
};
