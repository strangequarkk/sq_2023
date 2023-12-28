import { useEffect, useState, } from "react";
import { retrieveAllReviews } from "../services/review.service"
import { ReviewCard } from "./ui/ReviewCard";
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
        return(<ReviewCard key={review.title} {...review}  />)
    }) :
        <p>no reviews found</p>
    return (
        <section id="experience" className="pt-12">
        <h2 className="font-heading text-3xl">Reviews</h2>
            {reviewCards}
        </section>
    )
}