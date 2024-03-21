import { useState } from 'react';
import moviesData from './moviesData';
import './App.css';
import Movies from './Movies';

function App() {
  const [movies, setMovies] = useState(moviesData);
  // function displayMovie(id) {

  // }
  
  return (
    <main className='main'>
      <h1 className='heading'>Rancid Tomatillos</h1>
      <Movies movies={movies}/>
    </main>
    
  );
};

export default App;
