import './Card.css';

function Card({ title, id, poster, avgRating}) {
    return (
        <div className='movie-card' id={id}>
            <img src={poster} alt={`${title} movie poster`}/>
        </div>
    )
};

export default Card