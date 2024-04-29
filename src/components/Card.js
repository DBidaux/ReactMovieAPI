import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DUMMY_IMAGE, IMAGE_URL, MINI_IMAGE, MINI_POSTER } from "../settings";
import "./Card.css";

export default function Card({ movie }) {
	const navigate = useNavigate();
	const handleRedirect = (movieId) => navigate(`/details/${movieId}`);
	let cardCount = 0;

	const placeholderURL =
		"https://via.placeholder.com/500x281.png?text=Placeholder+Image";

	const src = movie.poster_path
		? MINI_IMAGE + movie.poster_path
		: placeholderURL;

	useEffect(() => {
		cardCount++;
	}, []);

	return (
		<div className={`card div${cardCount}`}>
			<img
				className="card-img-top"
				src={src}
				alt="Movie Card"
				loading="lazy"
			/>
			<div className="card-body">
				<h3 className="card-title">{movie.title}</h3>
				<h6 className="card-subtitle text-muted">
					{movie.release_date}
				</h6>
			</div>
			<button
				onClick={() => handleRedirect(movie.id)}
				className="btn btn-outline-success"
			>
				Más información
			</button>
		</div>
	);
}
