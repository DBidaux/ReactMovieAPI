import React from "react";
import { useEffect, useState } from "react";

export default function useFetch(url, setState, sameResponse) {
	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch");
				}
				return response.json();
			})
			.then((data) => {
				setState(sameResponse ? data[sameResponse] : data);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, [sameResponse, setState, url]);
}
