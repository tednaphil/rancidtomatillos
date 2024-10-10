export const fetchMovies = async () => {
    try {
        const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
        if(!response.ok) {
            throw new Error(`There was an issue getting the information... check back later. ${response.status}`)
        }
        return await response.json();
    } catch (error) {
        throw error
    };
}
