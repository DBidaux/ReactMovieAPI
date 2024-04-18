import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DUMMY_IMAGE, IMAGE_URL } from "../settings";

export default function Card({ movie }) {
	const navigate = useNavigate();
	const handleRedirect = (movieId) => navigate(`/details/${movieId}`);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 767.98px)");
		const refreshIsMobile = (mq) => {
			setIsMobile(mq.matches);
		};
		refreshIsMobile(mediaQuery);
		mediaQuery.addEventListener("change", refreshIsMobile);

		return () => {
			mediaQuery.removeEventListener("change", refreshIsMobile);
		};
	}, []);

	let src;
	if (movie.backdrop_path) {
		src = IMAGE_URL + movie.backdrop_path;
	} else {
		src = DUMMY_IMAGE;
	}

	return (
		<div className={`card ${isMobile ? "" : "m-3"} flex-grow-1 shadow-sm`}>
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
