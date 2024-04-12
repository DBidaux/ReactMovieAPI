import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpcomingMovies from "./UpcomingMovies";
import InfoMovie from "./InfoMovie";
import Footer from "../components/Footer";
import Error from "./Error";
import Menu from "../components/Menu";

export default function Pages() {
	return (
		<div className="flex-grow-1 bg-light min-vh-100 d-flex flex-column">
			<Router>
				<div className="mb-3">{<Menu></Menu>}</div>
				<Routes>
					<Route
						exact
						path="/"
						element={<UpcomingMovies />}
					></Route>
					<Route
						path="details/:movie_id"
						element={<InfoMovie />}
					></Route>
					<Route path="*" element={<Error />}></Route>
				</Routes>
			</Router>

			<Footer></Footer>
		</div>
	);
}
