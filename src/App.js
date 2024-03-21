import { useState } from 'react';
import moviesData from './moviesData';
import './App.css';
import Movies from './Movies';
import Card from './Card';

function App() {
  const [movies, setMovies] = useState(moviesData);

  return (
    <main className='main'>
      <h1>Rancid Tomatillos</h1>
    </main>
    
  );
}

export default App;
