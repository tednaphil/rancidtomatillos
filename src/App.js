import "./App.css";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import { Routes, Route } from "react-router-dom";
import BadUrl from "./BadUrl";
import { useQuery } from "react-query";
import axios from "axios";

const retrieveMovies = async () => {
  const response = await axios.get('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
  return response.data
}

function App() {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery('moviesData', retrieveMovies);
  
  if (isLoading) return <h2>Loading...</h2>

  if (error) return <h2 className="error">{`There was an issue getting the information... check back later.`}</h2>

  function organizeMovieData({movies}) {
    return movies.map((movie) => {
      let movieYear = movie.release_date.slice(0, 4);
      let movieMonth = movie.release_date.slice(5, 7);
      let movieDay = movie.release_date.slice(8, 10);
      const newMovie = {...movie};
      newMovie.release_date = movieMonth + "/" + movieDay + "/" + movieYear;
      return newMovie
    });
  };

  const orgMovies = organizeMovieData(movies);

  return (
    <main className="main">
      <h1 className="heading">Rancid Tomatillos</h1>
      <Routes>
        <Route path="/" element={<Movies movies={orgMovies} />}></Route>
        <Route path="/movie/:movieId" element={<SingleMovie />}></Route>
        <Route path="*" element={<BadUrl />}></Route>
      </Routes>
    </main>
  );
}

export default App;
