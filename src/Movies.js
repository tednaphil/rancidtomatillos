import { useState } from 'react';
import './Movies.css';
import Card from './Card';

function Movies({ movies }) {
    const movieCards = 
    movies.movies.map(movie => {
        return (
            <Card
                title={movie.title}
                avgRating={movie.average_rating}
                releaseDate={movie.release_date}
                poster={movie.poster_path}
                id={movie.id}
                key={movie.id}
            />
        )
    });

    return (
        <section className='movies'>
            {movieCards}
        </section>
    );
};

export default Movies