const TOKEN = "api_key=c0d3a8981258a628a9bf23cd14d04976";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const UPCOMING_URL = `${BASE_URL}upcoming?${TOKEN}`;
const INFO_URL = `${BASE_URL}movie_id?${TOKEN}`;
const VIDEO_URL = `${BASE_URL}movie_id/videos?${TOKEN}`;
const CREDIT_URL = `${BASE_URL}movie_id/credits?${TOKEN}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
const IMAGE_ORIGINAL_URL = "https://image.tmdb.org/t/p/original/";
const MINI_IMAGE = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";
const MINI_POSTER = "https://media.themoviedb.org/t/p/w220_and_h330_face";
const ACTOR_CARD_IMAGE = "https://media.themoviedb.org/t/p/w138_and_h175_face";
const IMDB_URL = "https://www.imdb.com/title/";
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?&query=input&${TOKEN}`;
const YOUTUBE_URL = "https://www.youtube.com/embed/";

export {
	UPCOMING_URL,
	INFO_URL,
	IMDB_URL,
	MINI_IMAGE,
	IMAGE_URL,
	IMAGE_ORIGINAL_URL,
	TOKEN,
	SEARCH_URL,
	VIDEO_URL,
	YOUTUBE_URL,
	CREDIT_URL,
	ACTOR_CARD_IMAGE,
	MINI_POSTER,
};
