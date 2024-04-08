import { Suspense, lazy } from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailPage/MovieDetailPage")
);
import Loader from "./Loader/Loader";

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
