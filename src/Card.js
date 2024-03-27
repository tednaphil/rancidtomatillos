import PropTypes from 'prop-types';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ title, id, poster, avgRating, releaseDate }) {

    // function handleClick(id) {
    //     fetchSingleMovie(id);
    // }

    // function fetchSingleMovie(id) {
    //     fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    //         .then(response => {
    //             if(!response.ok) {
    //                 throw new Error('We couldn\'t find the movie, please check back later.')
    //             }
    //             return response.json()
    //         })
    //         .then(data => organizeSelection(data.movie))
    //         .catch(err => setError(err.message))
    // }

    // function organizeSelection(data) {
    //     let movie = data;

    //     movie.hours = Math.floor(movie.runtime / 60);
    //     movie.minutes = movie.runtime % 60;
    //     movie.budget = movie.budget.toLocaleString();
    //     movie.revenue = movie.revenue.toLocaleString();
    //     movie.genres = movie.genres.join(', ');
    //     movie.releaseDate = releaseDate;
    //     // console.log({movie})
    //     setSelection(movie);
    // }

    return (
        <Link to={`/${id}`} className='movie-card' id={id}>
            <img className='poster' src={poster} alt={`${title} movie poster`}/>
            <aside className='popup'>
                <h2 className='movie-info movie-title'>{title}</h2>
                <p className='movie-info'>Avg Rating: {Math.round(avgRating * 10) / 10}</p>
                <p className='movie-info'>Release Date: {releaseDate}</p>
            </aside>
        </Link>
        // <section className='movie-card' id={id} tabIndex='0' onClick={() => handleClick(id)} onKeyDown={(e) => {
        //     if (e.keyCode === 32 || e.keyCode === 13) {
        //         handleClick(id)
        //     }
        // }}>
        //     <img className='poster' src={poster} alt={`${title} movie poster`}/>
        //     <aside className='popup'>
        //         <h2 className='movie-info movie-title'>{title}</h2>
        //         <p className='movie-info'>Avg Rating: {Math.round(avgRating * 10) / 10}</p>
        //         <p className='movie-info'>Release Date: {releaseDate}</p>
        //     </aside>
        // </section>
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