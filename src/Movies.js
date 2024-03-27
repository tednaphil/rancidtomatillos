import PropTypes from 'prop-types';
import './Movies.css';
import Card from './Card';

function Movies({ movies, setError }) {
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
                setError={setError}
            />
        )
    });

    return (
        <>
            <h2 className='heading2'>Top Movies Now...</h2>
            <section className='movies'>
                {movieCards}
            </section>
        </>
    );
};

export default Movies

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    setError: PropTypes.func.isRequired,
}