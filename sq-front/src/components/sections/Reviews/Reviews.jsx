import { useEffect, useState } from "react";
import { retrieveAllReviews } from "../../../services/review.service";
import { useWindowSize } from "../../../utils/useWindowSize";
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

export const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const winWidth = useWindowSize()[0];
  const calcVisible = winWidth / 400 < 1 ? 1 : winWidth / 400;
  const [visibleCards, setVisibleCards] = useState(calcVisible);

  useEffect(() => {
    retrieveAllReviews(setReviews);
  }, []);

  useEffect(() => {
    setVisibleCards(calcVisible);
  }, [winWidth, calcVisible]);

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
    <section id='reviews' className='pt-12 relative'>
      <h2 className='font-heading text-3xl mb-3 max-w-[650px] mx-auto'>
        Reviews
      </h2>
      <br />

      <CarouselProvider
        naturalSlideWidth={0}
        naturalSlideHeight={0}
        totalSlides={reviews.length}
        visibleSlides={visibleCards}
      >
        <DotGroup
          dotNumbers={true}
          className='flex justify-around align-middle w-3/4 mx-auto text-sm my-2'
        />
        <div className='relative'>
          <ButtonBack className='absolute -left-8  top-0 bottom-0 z-40'>
            <span className='carouselButton before:right-[10%]'>
              <img
                className='h-14 z-10 relative text-neutral-700'
                src={LeftArrow}
                alt='Back'
              />
            </span>
          </ButtonBack>
          <ButtonNext className=' absolute -right-8 top-0 bottom-0 z-40'>
            <span className=' carouselButton before:left-[10%]'>
              <img className='h-14 z-10 relative' src={RightArrow} alt='Next' />
            </span>
          </ButtonNext>
          <Slider classNameTray='flex'>{reviewCards}</Slider>
        </div>
      </CarouselProvider>
      <a
        href='wyzant.com/Tutors/KaeTutorsCS'
        className='text-sm text-center block w-3/4 mx-auto underline pt-3'
      >
        Check out my Wyzant profile for more student reviews!
      </a>
    </section>
  );
};
