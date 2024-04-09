import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";

import { fetchMovies } from "../../components/services/api";
import MoviesList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    async function fetchMovieByQuery() {
      try {
        const data = await fetchMovies(query);
        setSearchResults(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieByQuery();
  }, [query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.inputValue.value.toLowerCase();
    setSearchParams({ query: searchTerm });
    e.target.elements.inputValue.value = "";
  };

  return (
    <div>
      <h2 className={css.searchTitle}>Search Movies</h2>
      <form className={css.searchForm} onSubmit={handleSearchSubmit}>
        <input className={css.searchInput} type="text" name="inputValue" />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      <MoviesList movies={searchResults} />
    </div>
  );
};

export default MoviesPage;
