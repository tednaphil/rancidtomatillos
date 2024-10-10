export const fetchSingleMovie = async (movieId) => {
    try {
        const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`);
        if(!response.ok) {
            throw new Error ('We couldn\'t find the movie, please check back later.')
        }
        return await response.json();
    } catch (error) {
        throw error
    }
}
