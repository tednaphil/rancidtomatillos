import { useState } from 'react';
import './Card.css';

function Card({ title, id, poster, avgRating, setSelection, displayMovie, releaseDate, setError }) {

    function handleClick(id) {
        fetchSingleMovie(id);
    }

    function fetchSingleMovie(id) {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error('We couldn\'t find the movie, please check back later.')
                }
                return response.json()
            })
            .then(data => setSelection(data))
            .catch(err => setError(err.message))
    }

    return (
        <div className='movie-card' id={id} onClick={() => handleClick(id)}>
            <img className='poster' src={poster} alt={`${title} movie poster`}/>
            <aside className='popup'>
                <h2 className='movie-info'>Title: {title}</h2>
                <p className='movie-info'>Avg Rating: {Math.round(avgRating * 10) / 10}</p>
                <p className='movie-info'>Release Date: {releaseDate}</p>
            </aside>
        </div>
    );
};

export default Card