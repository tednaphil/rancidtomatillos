import PropTypes from 'prop-types';
import './SingleMovie.css';

function SingleMovie({selection, setSelection}) {
    const releaseYear = selection.releaseDate.split('/')[2]

    return (
        <article className='single-movie'>
            <button className='home-button' onClick={() => setSelection('') }>&#x2716;</button>
            <img className='movie-backdrop' src={selection.backdrop_path} alt={`${selection.title} movie poster`}/>
            <section className='details'>
                <h2 className='movie-title-heading'>{selection.title} {`(${releaseYear})`}</h2>
                <h3 className='tagline'>{selection.tagline}</h3>
                <p className='description'>{selection.overview}</p>
                <p className='stats'><b>Genres:</b> {selection.genres} | <b>Avg Rating:</b> {selection.average_rating}/10 
                | <b>Runtime:</b> {selection.hours} hr(s) {selection.minutes} min | <b>Budget:</b> ${selection.budget} | <b>Revenue:</b> ${selection.revenue}</p>
            </section>
        </article>
    )
}

export default SingleMovie

SingleMovie.propTypes = {
    selection: PropTypes.object.isRequired,
    setSelection: PropTypes.func.isRequired,
}