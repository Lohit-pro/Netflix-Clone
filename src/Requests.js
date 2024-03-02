const API_KEY = "5fc22efda4d071fe969ca9c48b9df8d8"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    // fetchActionMovies: `/discover/week?api_key=${API_KEY}&with_genres=28`,
    // fetchComedyMovies: `/discover/week?api_key=${API_KEY}&with_genres=35`,
    // fetchHorrorMovies: `/discover/week?api_key=${API_KEY}&with_genres=27`,
    // fetchRomanceMovies: `/discover/week?api_key=${API_KEY}&with_genres=10749`,
    // fetchDocumentaries: `/discover/week?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

// https://api.themoviedb.org/3/discover/week?api_key=5fc22efda4d071fe969ca9c48b9df8d8&with_genres=28