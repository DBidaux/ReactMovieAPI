import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BarraCarga from "../images/BarraCarga.svg";
import ActorCard from "../components/ActorCard";
import {
	INFO_URL,
	IMAGE_ORIGINAL_URL,
	IMDB_URL,
	MINI_IMAGE,
	VIDEO_URL,
	YOUTUBE_URL,
	CREDIT_URL,
} from "../settings";
import "./InfoMovie.css";

export default function InfoMovie() {
	const [movie, setMovie] = useState({});
	const [video, setVideo] = useState({});
	const [credit, setCredit] = useState({});
	const { movie_id } = useParams();

	useFetch(INFO_URL.replace("movie_id", movie_id), setMovie);
	useFetch(VIDEO_URL.replace("movie_id", movie_id), setVideo);

	const genres = movie.genres || [];
	const genresNames = genres.map((genre) => genre.name);
	const concatGenres = genresNames.join(", ");

	let languages = movie.spoken_languages;
	let original_lang = null;

	if (languages) {
		console.log(languages);
		languages.map((language) => {
			original_lang = language.name;
		});
	}

	let officialTrailer = {};
	const videos = video && video.results;

	if (videos && videos.length > 0) {
		for (const result of videos) {
			if (result.name === "Official Trailer") {
				officialTrailer = result;
				break;
			}
		}
	}
	const FULL_YOUTUBE_URL = YOUTUBE_URL + officialTrailer.key;

	useFetch(CREDIT_URL.replace("movie_id", movie_id), setCredit);
	let creditCast = credit.cast;

	const placeholderURL =
		"https://via.placeholder.com/974x450.png?text=Placeholder+Image";

	const releaseYear = movie.release_date;
	const year = new Date(releaseYear).getFullYear();

	const POSTER_IMAGE = MINI_IMAGE + movie.poster_path;

	console.log(movie.runtime);

	const runTime = movie.runtime;
	const hours = Math.floor(runTime / 60);
	const minutes = ((runTime / 60 - hours) * 60).toFixed(0);
	const runtime = `${hours}h ${minutes}m`;

	return (
		<div className="info-movie-container">
			<div
				className="info-movie-background-image"
				style={{
					backgroundImage: movie.backdrop_path
						? `url(${IMAGE_ORIGINAL_URL + movie.backdrop_path})`
						: `url(${placeholderURL})`,
				}}
			>
				<div className="movie-details-content">
					<img
						className="movie-image-details"
						src={POSTER_IMAGE}
						alt=""
						placeholder="https://via.placeholder.com/300x450.png?text=Placeholder+Image"
					/>
					<div className="info-movie-details-text">
						<div>
							<h1>
								<a href={IMDB_URL + movie.imdb_id}>
									{movie.title}{" "}
								</a>
								<span>({year})</span>
							</h1>

							<span className="info-movie-details-facts">
								{movie.release_date} -{" "}
								<strong>Géneros: </strong>
								{concatGenres} - {runtime}
							</span>
							<div className="info-movie-vote-average">
								<b>Vote average:</b>
								<BarraCarga voteAverage={movie.vote_average} />
							</div>
							<div>
								<h2 className="info-movie-tag">
									{movie.tagline}
								</h2>
								<h4>Sinopsis</h4>
								<p>{movie.overview}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container-extra-info">
				<div className="carousel-section">
					<h3 id="cast-section">Cast</h3>
					<div class="carousel-grid-container">
						{creditCast &&
							creditCast.slice(0, 10).map((actor) => (
								<div className="slider-cast-item">
									<ActorCard
										actor={{
											name: actor.name,
											character: actor.character,
											profile_path: actor.profile_path,
										}}
										key={actor.id}
									/>
								</div>
							))}
					</div>
				</div>
				<div class="trailer">
					<div className="trailer-section">
						<div className="trailer-grid-container">
							<h3 id="h3-no-margin">Official Trailer</h3>
							<div className="yt-container">
								<iframe
									title="trailer"
									id="ytplayer"
									type="text/html"
									width="350"
									height="262.5"
									src={FULL_YOUTUBE_URL}
									allowfullscreen
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="trivia">
					<h3>Trivia:</h3>
					<div>
						<strong>Status: </strong>
						<p>{movie.status}</p>
					</div>
					<div>
						<strong>Original language: </strong>
						<p>{original_lang}</p>
					</div>
					<div>
						<strong>Budget: </strong>
						<p>{movie.budget}$</p>
					</div>
					<div>
						<strong>Revenue: </strong>
						<p>{movie.revenue}$</p>
					</div>
				</div>
			</div>
		</div>
	);
}
