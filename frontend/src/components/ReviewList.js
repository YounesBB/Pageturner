
import { Star24Filled } from '@fluentui/react-icons'


export const ReviewList = ({ reviews}) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
            <h1>Book Reviews</h1>
            {reviews.map((review) => {
                return (
                <div key={review.id} style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)', padding: '10px', marginBottom: '10px', border: 'none', borderRadius: '10px' }}>
                    <h2>
                        <Star24Filled style={{ color: "f3ce13" }} /> {review.rating} / 10</h2>
                    <p>{review.comment}</p>
                    <p>By {review.user ? review.user.email : null}</p>
                </div>
                )
                })}
        </div>
    );
}
