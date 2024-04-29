import React, { useEffect, useState } from "react";
import { UPCOMING_URL } from "../settings";
import Buscador from "../components/Buscador";
import Pagination from "../components/Pagination.js";
import Card from "../components/Card";
import "./Upcoming.css";

export default function UpcomingMovies() {
	const [movies, setMovies] = useState([]);
	const [pages, setPages] = useState({ current: 1, total: 20 });

	useEffect(() => {
		fetch(UPCOMING_URL + "&page=" + pages.current, setMovies)
			.then((r) => r.json())
			.then((data) => {
				setMovies(data.results.slice(0, 21));
				if (!pages.total) {
					setPages((prevPages) => {
						return {
							...prevPages,
							total: data.total_pages,
						};
					});
				}
			});
	}, [pages]);

	return (
		<div className="container-upcoming">
			<h1>Upcoming Movies</h1>
			<Buscador
				movies={movies}
				setMovies={setMovies}
				setPages={setPages}
			></Buscador>
			<Pagination pages={pages} setPages={setPages}></Pagination>
			<div className="parent">
				{movies.map((movie) => (
					<Card movie={movie} key={movie.id} />
				))}
			</div>
			<Pagination pages={pages} setPages={setPages}></Pagination>
		</div>
	);
}
