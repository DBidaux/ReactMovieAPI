import React, { useEffect, useState } from "react";
import { UPCOMING_URL } from "../settings";
import Buscador from "../components/Buscador";
import Pagination from "../components/Pagination.js";
import Card from "../components/Card";

export default function UpcomingMovies() {
	const [movies, setMovies] = useState([]);
	const [pages, setPages] = useState({ current: 1, total: 20 });

	useEffect(() => {
		fetch(UPCOMING_URL + "&page=" + pages.current, setMovies)
			.then((r) => r.json())
			.then((data) => {
				setMovies(data.results.slice(0, 18));
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
		<div className="pt-5 pb-5 flex-grow-1">
			<h1 className="text-center mb-5">Upcoming Movies</h1>
			<Buscador
				movies={movies}
				setMovies={setMovies}
				setPages={setPages}
			></Buscador>
			<Pagination pages={pages} setPages={setPages}></Pagination>
			<div className="row row-cols-1 row-cols-md-3">
				{movies.map((movie) => (
					<Card movie={movie} key={movie.id} />
				))}
			</div>
			<Pagination pages={pages} setPages={setPages}></Pagination>
		</div>
	);
}
