import { useState, useEffect } from "react";
import { SEARCH_URL } from "../settings";

export default function Buscador({ setMovies, setPages }) {
	const [input, setInput] = useState("");

	useEffect(() => {
		input !== "" &&
			fetch(SEARCH_URL.replace("input", input))
				.then((response) => response.json())
				.then((data) => {
					setMovies && setMovies(data.results);
				});
	}, [input, setMovies]);

	const handleSearch = (e) => setInput(e.target.value);

	return (
		<div>
			<form className="d-flex justify-content-center mb-3">
				<input
					type="text"
					className="form-control w-50"
					value={input}
					onChange={handleSearch}
					placeholder="Search a movie"
				/>
			</form>
		</div>
	);
}
