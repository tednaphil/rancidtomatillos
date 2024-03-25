import { useState, useEffect } from 'react';
import './App.css';
import Movies from './Movies';
import SingleMovie from './SingleMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [selection, setSelection] = useState('');
  const [error, setError] = useState('');

  function fetchMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if(!response.ok) {
          throw new Error('There was an issue getting the information... check back later.')
        }
        return response.json()
      })
      .then(data => setMovies(data.movies))
      .catch(err => setError(err.message))
  }

    useEffect(() => {
      fetchMovies();
    }, []);
  
  return (
    <main className='main'>
      <h1 className='heading'>Rancid Tomatillos</h1>
      { error && <h2 className='error'>{error}</h2> }
      { !selection ? 
      <>
        <h2 className='heading2'>Top Movies Now...</h2>
        <Movies movies={movies} setSelection={setSelection} setError={setError}/>
      </>
      :
      <SingleMovie selection={selection} setSelection={setSelection} /> }
    </main>
    
  );
};

export default App;
