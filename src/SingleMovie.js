import { useState } from 'react';
import './SingleMovie.css';

function SingleMovie({selection, setSelection}) {


    //data formatting functions for genres, budget, revenue, runtime, and maybe rating
    //pass those returns to "stats" p element below

    return (
        <article className='single-movie'>
            <button className='home-button' onClick={() => setSelection('') }>&#x2716;</button>
            <img className='movie-backdrop' src={selection.movie.backdrop_path} alt={`${selection.movie.title} movie poster`}/>
            <section className='details'>
                <h2 className='movie-title-heading'>{selection.movie.title}</h2>
                <h3 className='tagline'>{selection.movie.tagline}</h3>
                <p className='description'>{selection.movie.overview}</p>
                <p className='stats'>{selection.movie.genres[0]} | Avg Rating: {selection.movie.average_rating}/10 | Runtime: {selection.movie.runtime} min |</p>
            </section>
        </article>
    )
}

export default SingleMovie