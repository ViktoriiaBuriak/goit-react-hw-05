import axios from "axios";

const accessKey = "6858e60a0d16701cc0c8b30925797e1f";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODU4ZTYwYTBkMTY3MDFjYzBjOGIzMDkyNTc5N2UxZiIsInN1YiI6IjY2MGFmMGMxMWZkMzZmMDE2Mzk5Y2RhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bIX00jw3udkJRXtgau4bDQj-nak2rDptdOyrGcNm-rw",
  },
});

export const fetchMovies = async (query) => {
  const response = await api.get("/search/movie", {
    params: {
      api_key: accessKey,
      query: query,
    },
  });
  return response.data.results;
};

export const getMoviesById = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`, {
    params: {
      api_key: accessKey,
    },
  });
  return response.data;
};

export const fetchPopularMovies = async () => {
  const response = await api.get("/trending/movie/day", {
    params: {
      api_key: accessKey,
    },
  });
  return response.data.results;
};

export const fetchMovieCast = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: accessKey,
    },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: accessKey,
    },
  });
  return response.data.results;
};
