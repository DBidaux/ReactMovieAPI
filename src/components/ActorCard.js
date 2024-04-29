import React from "react";
import "./ActorCard.css";
import { ACTOR_CARD_IMAGE } from "../settings";

export default function ActorCard({ actor }) {
	return (
		<div className="actor-card">
			<img src={ACTOR_CARD_IMAGE + actor.profile_path} alt="Avatar"></img>

			<div className="actor-container">
				<h4 className="actor-name">{actor.name}</h4>
				<p>{actor.character}</p>
			</div>
		</div>
	);
}
