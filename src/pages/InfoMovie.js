import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { INFO_URL, IMAGE_ORIGINAL_URL, IMDB_URL } from "../settings";

export default function InfoMovie() {
	const [movie, setMovie] = useState({});
	const { movie_id } = useParams();

	useFetch(INFO_URL.replace("movie_id", movie_id), setMovie);

	const genres = movie.genres || [];
	const genresNames = genres.map((genre) => genre.name);
	const concatGenres = genresNames.join(", ");

	//Debug zone
	// console.log(movie);
	// console.log(movie_id);
	// console.log(movie.genres);
	// console.log(genresNames);
	// console.log(concatGenres);

	const imgOriginal = {
		backgroundImage: `url(${IMAGE_ORIGINAL_URL + movie.backdrop_path}`,
		height: "450px",
		backgroundSize: "cover",
		backgroundPosition: "center center",
	};

	return (
		<div className="flex-grow-2 pb-4">
			<div style={imgOriginal} className="w-100"></div>
			<div className="container px-4">
				<h1 className="display-1 text-center my-4">
					{movie.title}
					<span className="ms-2 fs-6 badge bg-primary">
						+{movie.original_language}
					</span>
					<span className="ms-2 fs-6 badge bg-primary">
						{movie.vote_average}⭐
					</span>
				</h1>
				<h2>{movie.tagline}</h2>
				<h6 className="card-subtitle mb-3 text-muted">
					{movie.release_date}
				</h6>
				<p>
					<strong>Géneros: </strong>
					{concatGenres}
				</p>
				<p className="my-3">{movie.overview}</p>
				<a
					className="ms-auto btn btn-warning"
					href={IMDB_URL + movie.imdb_id}
				>
					IMDb
				</a>
			</div>
		</div>
	);
}
