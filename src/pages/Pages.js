import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpcomingMovies from "./UpcomingMovies";
import InfoMovie from "./InfoMovie";

import Error from "./Error";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Pages() {
	return (
		<div>
			<Router>
				<div>{<Menu></Menu>}</div>
				<Routes>
					<Route
						exact
						path="/ReactMovieAPI"
						element={<UpcomingMovies />}
					></Route>
					<Route
						path="details/:movie_id"
						element={<InfoMovie />}
					></Route>
					<Route path="*" element={<Error />}></Route>
				</Routes>
			</Router>
		</div>
	);
}
