import { useState } from 'react';
import moviesData from './moviesData';
import './App.css';
import Movies from './Movies';
import SingleMovie from './SingleMovie';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [selection, setSelection] = useState('');

  function displayMovie(id) {
    console.log(`displayMovie ${id}`)
  }

  
  return (
    <main className='main'>
      <h1 className='heading'>Rancid Tomatillos</h1>
      {/* <Movies movies={movies}/> */}
      { !selection ? <Movies movies={movies} setSelection={setSelection} displayMovie={displayMovie}/> : <SingleMovie selection={selection} setSelection={setSelection} /> }
    </main>
    
  );
};

export default App;
