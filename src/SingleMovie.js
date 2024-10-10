import './SingleMovie.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchSingleMovie } from './APICalls';

function SingleMovie() {
    const [selection, setSelection] = useState('');
    const [error, setError] = useState('');
    const movieId = useParams().movieId;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movie = await fetchSingleMovie(movieId);
                organizeSelection(movie);
            } catch(error) {
                setError(error.message)
            }
        }
        fetchData()
    }, [movieId]);

    function organizeSelection({movie}) {
        movie.hours = Math.floor(movie.runtime / 60);
        movie.minutes = movie.runtime % 60;
        movie.budget = movie.budget.toLocaleString();
        movie.revenue = movie.revenue.toLocaleString();
        movie.genres = movie.genres.join(', ');
        movie.release_date = movie.release_date.slice(0, 4);

        setSelection(movie);
    }

    return (
        <>
            { error && <h2 className='error'>{error}</h2> }
            { selection && <article className='single-movie'>
                <Link to='/' className='home-button'>&#x2716;</Link>
                <img className='movie-backdrop' src={selection.backdrop_path} alt={`${selection.title} movie poster`}/>
                <section className='details'>
                    <h2 className='movie-title-heading'>{selection.title} {`(${selection.release_date})`}</h2>
                    <h3 className='tagline'>{selection.tagline}</h3>
                    <p className='description'>{selection.overview}</p>
                    <p className='stats'><b>Genres:</b> {selection.genres} | <b>Avg Rating:</b> {selection.average_rating}/10 
                    | <b>Runtime:</b> {selection.hours} hr(s) {selection.minutes} min | <b>Budget:</b> ${selection.budget} | <b>Revenue:</b> ${selection.revenue}</p>
                </section>
            </article>}
        </>
    )
}

export default SingleMovie