const API_KEY = "fcf486a9fe8022ef265bc2c17278b990";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    console.log("show popular movies")
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    console.log(data.results)
    return data.results;
}
export const getSearchMovies = async (query) => {
    console.log("show searched movies")
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json();
    console.log(data.results)
    return data.results;
}