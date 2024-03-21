import { useState } from 'react';
import './Card.css';

function Card({ title, id, poster, avgRating }) {
    const [clicked, setClicked] = useState('');

    return (
        <div className='movie-card' id={id} clicked={clicked} onClick={() => setClicked('clicked')}>
            <img src={poster} alt={`${title} movie poster`}/>
        </div>
    );
};

export default Card