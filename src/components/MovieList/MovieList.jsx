import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default MoviesList;
