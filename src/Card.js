import { useState } from 'react';
import './Card.css';

function Card({ title, id, poster, avgRating, releaseDate }) {
    const [clicked, setClicked] = useState('');

    return (
        <div className='movie-card' id={id} clicked={clicked} onClick={() => setClicked('clicked')}>
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