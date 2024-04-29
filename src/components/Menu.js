import { useNavigate } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
	const nav = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		nav(`/ReactMovieAPI`);
	};
	return (
		<aside>
			<ul className="menu-horizontal">
				<li>
					<a href="#" onClick={handleClick}>
						Upcoming
					</a>
				</li>
				<li>
					<a href="https://www.imdb.com">IMDb</a>
				</li>
				<li>
					<a href="https://www.themoviedb.org">The Movie Database</a>
				</li>
			</ul>
		</aside>
	);
}
