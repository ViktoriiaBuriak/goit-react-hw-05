import css from "./MovieReviews.module.css";

const MovieReviews = ({ reviews }) => {
  return (
    <div>
      <h3 className={css.reviewsTitle}>Reviews</h3>
      <ul className={css.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id}>
            <p className={css.reviewsAuthor}>{review.author}</p>
            <p className={css.reviewsContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
