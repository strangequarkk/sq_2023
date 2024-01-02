import { useEffect, useState, } from "react";
import { retrieveAllReviews } from "../../../services/review.service"
import { ReviewCard } from "./ReviewCard";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
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
            className="border-2 border-solid border-black mx-2 flex"
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
        naturalSlideHeight={0}
        totalSlides={reviews.length}
            >
                <DotGroup dotNumbers={true} className="flex justify-around w-3/4 m-auto" />
                <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
                <Slider classNameTray="flex">
                {reviewCards}
                </Slider>
                
      </CarouselProvider>
            
        </section>
    )
}