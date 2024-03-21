import './Movies.css';
import Card from './Card';

function Movies({movies}) {
    const movieCards = 
    // console.log(movies)
    movies.movies.map(movie => {
        return (
            <Card
                title={movie.title}
                avgRating={movie.average_rating}
                poster={movie.poster_path}
                id={movie.id}
                key={movie.id}
            />
        )
    })//map through movies to create cards


    return (
        <section className='movies'>
            {movieCards}
        </section>
    )

}

export default Movies