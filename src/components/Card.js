import React from "react";
import { useNavigate } from "react-router-dom";
import { DUMMY_IMAGE, IMAGE_URL } from "../settings";

export default function Card({ movie }) {
	const navigate = useNavigate();
	const handleRedirect = (movieId) => navigate(`/details/${movieId}`);

	let src;
	if (movie.backdrop_path) {
		src = IMAGE_URL + movie.backdrop_path;
	} else {
		src = DUMMY_IMAGE;
	}

	return (
		<div className="card flex-grow-1 m-3 shadow-sm">
			<img className="card-img-top" src={src} alt="Movie Card" />
			<div className="card-body">
				<h3>{movie.title}</h3>
				<h6 className="card-subtitle mb-2 text-muted">
					{movie.release_date}
				</h6>
				<p className="card-text">{movie.overview}</p>
				<button
					onClick={() => handleRedirect(movie.id)}
					className="btn btn-outline-success"
				>
					Más información
				</button>
			</div>
		</div>
	);
}
