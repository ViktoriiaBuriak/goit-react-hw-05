import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
import { fetchMovieReviews } from "../services/api";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const castResponse = await fetchMovieReviews(movieId);
        setMovieReviews(castResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h3 className={css.reviewsTitle}>Reviews</h3>
      {movieReviews.length > 0 ? (
        <ul className={css.reviewsList}>
          {movieReviews.map((review) => (
            <li key={review.id}>
              <p className={css.reviewsAuthor}>{review.author}</p>
              <p className={css.reviewsContent}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieReviews;
