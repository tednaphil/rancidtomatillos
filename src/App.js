import { useState } from 'react';
import moviesData from './moviesData';
import './App.css';
import Movies from './Movies';

function App() {
  const [movies, setMovies] = useState(moviesData);
  
  return (
    <main className='main'>
      <h1 className='heading'>Rancid Tomatillos</h1>
      <h2 className='heading2'>Top Movies Now...</h2>
      <Movies movies={movies}/>
    </main>
    
  );
};

export default App;
