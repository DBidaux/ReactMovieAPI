import { useNavigate } from "react-router-dom";

export default function Menu() {
	const nav = useNavigate();

	return (
		<aside className="flex-shrink-0 bg-dark px-4">
			<div className="menu">
				<h3 className="text-light text-center ">Ejercicio 7</h3>
				<button
					className="btn btn-outline-light w-100 mt-3 mb-3"
					onClick={() => nav(`/`)}
				>
					Upcoming
				</button>
				<a
					className="btn btn-outline-light w-100 mb-3"
					href="https://www.imdb.com"
				>
					IMDb
				</a>
				<a
					className="btn btn-outline-light w-100 mb-3"
					href="https://www.themoviedb.org"
				>
					The Movie Database
				</a>
			</div>
		</aside>
	);
}
