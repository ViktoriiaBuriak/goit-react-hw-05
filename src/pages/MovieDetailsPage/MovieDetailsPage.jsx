import { useState, useEffect, useRef } from "react";
import { Link, useParams, Routes, Route, useLocation } from "react-router-dom";
import {
  fetchMovieCast,
  fetchMovieReviews,
  getMoviesById,
} from "../../components/services/api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCast, setMovieCast] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [detailsResponse, castResponse, reviewsResponse] =
          await Promise.all([
            getMoviesById(movieId),
            fetchMovieCast(movieId),
            fetchMovieReviews(movieId),
          ]);
        setMovieDetails(detailsResponse);
        setMovieCast(castResponse);
        setMovieReviews(reviewsResponse);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }

  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  return (
    <div>
      <Link to={backLinkRef.current}>⬅ Go Back</Link>
      <h2 className={css.movieTitle}>{movieDetails.title}</h2>
      <img
        className={css.moviePoster}
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : defaultImg
        }
        width={250}
        alt={movieDetails.title}
      />
      <h2>{movieDetails.title}</h2>
      <p className={css.movieOverview}>{movieDetails.overview}</p>
      <div className={css.movieLink}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Routes>
        <Route path="cast" element={<MovieCast cast={movieCast} />} />
        <Route
          path="reviews"
          element={<MovieReviews reviews={movieReviews} />}
        />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
