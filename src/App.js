import { useState, useEffect } from "react";
import "./App.css";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import { Routes, Route } from "react-router-dom";
import BadUrl from "./BadUrl";
import { fetchMovies } from "./APICalls";
import { QueryClient, QueryClientProvider, useQuery} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

function Home() {
  const [movies, setMovies] = useState([]);
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then((res) =>
        res.json().then((info) => organizeMovieData(info)),
      ),
  });

  if (isPending) return 'Loading...'

  if (error) return `There was an issue getting the information... check back later. ${error}`

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
