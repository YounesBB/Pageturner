
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"
import { getBookByISBN } from "../api/books";
import { DisplayBook } from "../components/DisplayBook"
import { AddReview } from "../components/AddReview"
import { ReviewList } from "../components/ReviewList"
import { getAllReviewByBook } from "../api/reviews"
import AuthContext from "../context/AuthProvider";
import { getUserProfile } from "../api/users";


export const BookPage = () => {
  const { isbn } = useParams()
  const [reviews, setReviews] = useState([])
  const [book, setBook] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  // USER INFO
  // const { user } = useContext(AuthContext)
  // console.log("USER INFO", user)


  useEffect(() => {
    const fetchData = async () => {
      const book = await getBookByISBN(isbn)
      setBook(book)
      console.log("BOOKID", book._id)
      const reviews = await getAllReviewByBook(book._id)
      console.log("REVIEWS", reviews)
      const user = await getUserProfile()
      setUserProfile(user)
      console.log("USER", user)



      if (reviews) {
        setReviews(reviews)
      }
    }
    fetchData()
  }, [])

  const handleAddReview = (bookID, userID, rating, comment) => {
    const newReview = {
      bookID: bookID,
      userID: userID,
      rating: rating,
      comment: comment
    };
    try {
      setReviews([...reviews, newReview]);
    } catch (error) {
      console.error(error);
    }
  };

  const element = book ? <DisplayBook book={book} /> : null

  return (
    <div >
      {element}
      <AddReview book={book} onAddReview={handleAddReview} user={userProfile} />
      <ReviewList reviews={reviews} />
    </div>
  )
}
