import PropTypes from 'prop-types';
import './Movies.css';
import Card from './Card';

function Movies({ movies, setSelection, setError }) {
    const movieCards = 
    movies.map(movie => {
        return (
            <Card
                title={movie.title}
                avgRating={movie.average_rating}
                releaseDate={movie.release_date}
                poster={movie.poster_path}
                id={movie.id}
                key={movie.id}
                setSelection={setSelection}
                setError={setError}
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

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
    setSelection: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
}