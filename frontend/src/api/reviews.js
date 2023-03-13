import reviewsMockData from './reviewsMockData.json';

let reviews = reviewsMockData

export const getReviews = () => {
   return reviews
}

export const newReview = (rating, comment) => {
    return {
        rating: rating,
        comment: comment
      }
}

export const addReview = (review) => {
    reviews = [...reviews, review]
    return reviews
}