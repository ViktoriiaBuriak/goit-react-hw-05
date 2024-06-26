import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchPopularMovies } from "../../components/services/api";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetchPopularMovies();
        setTrendingMovies(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2 className={css.homeTitle}>Trending today</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
