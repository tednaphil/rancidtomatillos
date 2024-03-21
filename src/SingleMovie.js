import './SingleMovie.css';

function SingleMovie({selection, setSelection}) {
    const movie = {
        "movie": {
            id: 1,
            title: "Fake Movie Title",
            poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
            release_date: "2019-12-04",
            overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
            average_rating: 6,
            genres: ["Drama"],
            budget:63000000,
            revenue:100853753,
            runtime:139,
            tagline: "It's a movie!"
        }
    }

    //data formatting functions for budget, revenue, runtime, and maybe rating
    //pass those returns to "stats" p element below

    //function to reset selection on home button click

    return (
        <article className='single-movie' Style={`background-image:url(${movie.movie.backdrop_path})`}>
            {/* use an image component instead and place the section over it with a negative margin */}
            <button className='home-button' onClick={() => setSelection('') }>Home</button>
            <section className='details'>
                <h2 className='movie-title-heading'>{selection}</h2>
                <h3 className='tagline'>{movie.movie.tagline}</h3>
                <p className='description'>{movie.movie.overview}</p>
                <p className='stats'>{movie.movie.genres[0]} | Avg Rating: {movie.movie.average_rating}/10 | Runtime: {movie.movie.runtime} min |</p>
            </section>
        </article>
    )
}

export default SingleMovie