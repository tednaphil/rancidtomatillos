import { useState, useEffect } from "react";
import "./App.css";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import { Routes, Route } from "react-router-dom";
import BadUrl from "./BadUrl";
import { fetchMovies } from "./APICalls";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  function organizeMovieData({ movies }) {
    const orgMovies = movies.map((movie) => {
      let movieYear = movie.release_date.slice(0, 4);
      let movieMonth = movie.release_date.slice(5, 7);
      let movieDay = movie.release_date.slice(8, 10);
      movie.release_date = movieMonth + "/" + movieDay + "/" + movieYear;
      return movie;
    });
    setMovies(orgMovies);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchMovies();
        organizeMovieData(movies);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="main">
      <h1 className="heading">Rancid Tomatillos</h1>
      {error && <h2 className="error">{error}</h2>}
      <Routes>
        <Route path="/" element={<Movies movies={movies} />}></Route>
        <Route path="/movie/:movieId" element={<SingleMovie />}></Route>
        <Route path="*" element={<BadUrl />}></Route>
      </Routes>
    </main>
  );
}

export default App;
