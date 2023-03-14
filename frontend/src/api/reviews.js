import reviewsMockData from './reviewsMockData.json';
import axios from 'axios';


const baseUrl = "http://localhost:4000/api";


// ////////////////////////// - It may be a good idea to change all these to async/await - //////////////////////////
export const getReviews = () => {
    
    return axios.get(`${baseUrl}/review`)
    .then(response => {
      // Return the books data as JSON
      //console.log("get worked")
      let reviews = response.data
      console.log(reviews)
      return reviews;
      //return response.data;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}


export const createReview = (bookID, userID, rating, comment) => {
  return axios.post(`${baseUrl}/review`, {
      bookID: bookID,
      userID: userID,
      rating: rating,
      comment: comment,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}

export const getAllReviewByBook = (id) => {
    return axios.get(`${baseUrl}/reviews/${id}`)
      .then(response => {
        console.log("DATA", response.data)
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
}


// let reviews = reviewsMockData

// export const getReviews = () => {
//    return reviews
// }

// export const newReview = (rating, comment) => {
//     return {
//         rating: rating,
//         comment: comment
//       }
// }

// export const addReview = (review) => {
//     reviews = [...reviews, review]
//     return reviews
// }