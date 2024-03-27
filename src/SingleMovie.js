import PropTypes from 'prop-types';
import './SingleMovie.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleMovie({setError}) {
    // console.log(useParams())
    const [selection, setSelection] = useState('');
    // const [error, setError] = useState('')
    const movieId = useParams().movieId

    function fetchSingleMovie(id) {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error('We couldn\'t find the movie, please check back later.')
                }
                return response.json()
            })
            .then(data => organizeSelection(data.movie))
            .catch(err => setError(err.message))
    }

    useEffect((movieId) => fetchSingleMovie(movieId), [])

    function organizeSelection(data) {
        let movie = data;

        movie.hours = Math.floor(movie.runtime / 60);
        movie.minutes = movie.runtime % 60;
        movie.budget = movie.budget.toLocaleString();
        movie.revenue = movie.revenue.toLocaleString();
        movie.genres = movie.genres.join(', ');
        // movie.releaseDate = releaseDate;
        setSelection(movie);
    }
    // const releaseYear = selection.releaseDate.split('/')[2]

    return (
        <article className='single-movie'>
            <button className='home-button' onClick={() => setSelection('') }>&#x2716;</button>
            <img className='movie-backdrop' src={selection.backdrop_path} alt={`${selection.title} movie poster`}/>
            <section className='details'>
                <h2 className='movie-title-heading'>{selection.title}</h2>
                <h3 className='tagline'>{selection.tagline}</h3>
                <p className='description'>{selection.overview}</p>
                <p className='stats'><b>Genres:</b> {selection.genres} | <b>Avg Rating:</b> {selection.average_rating}/10 
                | <b>Runtime:</b> {selection.hours} hr(s) {selection.minutes} min | <b>Budget:</b> ${selection.budget} | <b>Revenue:</b> ${selection.revenue}</p>
            </section>
        </article>
    )
}

export default SingleMovie

SingleMovie.propTypes = {
    setError: PropTypes.func.isRequired,
}