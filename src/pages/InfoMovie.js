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
	const imgOriginal = {
		backgroundImage: movie.backdrop_path
			? `url(${IMAGE_ORIGINAL_URL + movie.backdrop_path})`
			: `url(${placeholderURL})`,
	};
	const releaseYear = movie.release_date;
	const year = new Date(releaseYear).getFullYear();

	const POSTER_IMAGE = MINI_IMAGE + movie.poster_path;

	return (
		<div>
			<div className="container">
				<div className="imgBackground" style={imgOriginal}>
					<div className="opaqueOverlay">
						<div className="poster">
							<img
								src={POSTER_IMAGE}
								alt=""
								placeholder="https://via.placeholder.com/300x450.png?text=Placeholder+Image"
							/>
							<div className="spanBarraCarga badge">
								Vote average:
								<BarraCarga voteAverage={movie.vote_average} />
							</div>
						</div>
						<div className="all-text">
							<h2>
								<a
									className="link"
									href="IMDB_URL + movie.imdb_id"
								>
									{movie.title}
								</a>
								<span>({year})</span>
							</h2>
							<div>
								<h6>
									{movie.release_date} -
									<strong>Géneros: </strong>
									{concatGenres}
								</h6>
							</div>
							<div className="all-text">
								<h4>{movie.tagline}</h4>
								<p>{movie.overview}</p>
								<a href={IMDB_URL + movie.imdb_id}>IMDb</a>
							</div>
							<div className="youtube-video">
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
				<div>
					<h3>Principal Cast</h3>
					<div className="grid-container">
						<div className="reparto_princ slider-container">
							<div className="slider">
								{creditCast &&
									creditCast.slice(0, 10).map((actor) => (
										<ActorCard
											actor={{
												name: actor.name,
												character: actor.character,
												profile_path:
													actor.profile_path,
											}}
											key={actor.id}
										/>
									))}
							</div>
						</div>
						<section className="section">
							<h3>Trivia:</h3>
							<p>
								<strong>Status: </strong>
								{movie.status}
							</p>
							<p>
								<strong>Original language: </strong>
								{original_lang}
							</p>
							<p>
								<strong>Budget: </strong>
								{movie.budget}$
							</p>
							<p>
								<strong>Revenue: </strong>
								{movie.revenue}$
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
