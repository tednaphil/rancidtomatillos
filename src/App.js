import { useState } from 'react';
import moviesData from './moviesData';
import './App.css';
import Movies from './Movies';
import SingleMovie from './SingleMovie';

function App() {
  const [movies, setMovies] = useState(moviesData);
  
  return (
    <main className='main'>
      <h1 className='heading'>Rancid Tomatillos</h1>
      {/* <Movies movies={movies}/> */}
      <SingleMovie/>
    </main>
    
  );
};

export default App;
