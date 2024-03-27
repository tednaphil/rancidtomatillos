import PropTypes from 'prop-types';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ title, id, poster, avgRating, releaseDate }) {

    return (
        <Link to={`/${id}`} className='movie-card' id={id}>
            <img className='poster' src={poster} alt={`${title} movie poster`}/>
            <aside className='popup'>
                <h2 className='movie-info movie-title'>{title}</h2>
                <p className='movie-info'>Avg Rating: {Math.round(avgRating * 10) / 10}</p>
                <p className='movie-info'>Release Date: {releaseDate}</p>
            </aside>
        </Link>
    );
};

export default Card

Card.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    releaseDate: PropTypes.string.isRequired,
}