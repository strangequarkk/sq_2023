import { useEffect, useState, } from "react";
import { retrieveAllReviews } from "../../../services/review.service"
import { ReviewCard } from "./ReviewCard";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LeftArrow from '../../../assets/arrow-chevron-left.svg'
import RightArrow from '../../../assets/arrow-chevron-right.svg'
import './reviews-style.css';

export const Reviews = () => {
    const [reviews, setReviews] = useState({})
    
    useEffect(() => {
        retrieveAllReviews(setReviews);
    }, [])
    
    useEffect(() => {
        console.log('reviews');
        console.log(reviews);
    }, [reviews])

    const reviewCards = reviews.length > 0 ? reviews.map((review) => {
        return (<Slide key={review.title}
            className="border-2 border-solid border-neutral-700 mx-2 flex"
        innerClassName="flex">
            <ReviewCard  {...review} />
        </Slide>)
    }) :
        <p>no reviews found</p>
    return (
        <section id="reviews" className="pt-12">
            <h2 className="font-heading text-3xl mb-3">Reviews</h2>
            <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={reviews.length}
            >
                <DotGroup dotNumbers={true} className="flex justify-around align-middle w-3/4 mx-auto text-sm my-2" />
                <div className="relative">
                    <ButtonBack className="absolute -left-8 top-0 bottom-0 z-40">
                    <span className=" before:content-[' '] before:bg-white/75 before:rounded-full before:p-24 before:absolute before:top-[20%] before:right-[10%] before:z-0">
                            <img className="h-14 z-10 relative text-neutral-700" src={LeftArrow} alt="Back" />
                            </span>
                    </ButtonBack>
                    <ButtonNext className="absolute -right-8 top-0 bottom-0 z-40">
                        <span className=" before:content-[' '] before:bg-white/75 before:rounded-full before:p-24 before:absolute before:top-[20%] before:left-[10%] before:z-0">
                            <img className="h-14 z-10 relative" src={RightArrow} alt="Next" />
                        </span>
                    </ButtonNext>
                <Slider classNameTray="flex">
                {reviewCards}
                    </Slider>
                    </div>
                
      </CarouselProvider>
            <a href="wyzant.com/Tutors/KaeTutorsCS" className="text-sm text-center block w-3/4 mx-auto underline pt-3">Check out my Wyzant profile for more student reviews!</a>
        </section>
    )
}