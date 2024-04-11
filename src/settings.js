const TOKEN = "api_key=c0d3a8981258a628a9bf23cd14d04976";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const UPCOMING_URL = `${BASE_URL}upcoming?${TOKEN}`;
const INFO_URL = `${BASE_URL}movie_id?${TOKEN}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
const IMAGE_ORIGINAL_URL = "https://image.tmdb.org/t/p/original/";
const DUMMY_IMAGE = "https://via.placeholder.com/500x281?text=No+Image+Found";
const IMDB_URL = "https://www.imdb.com/title/";
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?&query=input&${TOKEN}`;

export {
	UPCOMING_URL,
	INFO_URL,
	IMDB_URL,
	DUMMY_IMAGE,
	IMAGE_URL,
	IMAGE_ORIGINAL_URL,
	TOKEN,
	SEARCH_URL,
};
