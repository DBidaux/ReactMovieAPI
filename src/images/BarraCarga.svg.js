import React from "react";
import "./BarraCarga.css";

export default function BarraCarga({ voteAverage }) {
	// Calcula el ancho de la barra de carga proporcional a la puntuación
	const barWidth = voteAverage ? (voteAverage / 10) * 200 : 0; // Convertimos la puntuación a un porcentaje y luego lo multiplicamos por 200 (la anchura máxima del SVG)

	// Calcula el porcentaje de aceptación
	const acceptanceRate = voteAverage
		? Math.round((voteAverage / 10) * 100)
		: 0;

	return (
		<div className="barraSvg">
			<svg viewBox="0 0 200 20" width="100%" height="20">
				{/* Fondo de la barra */}
				<rect x="0" y="0" width="200" height="20" fill="#eee" />
				{/* Barra de carga */}
				<rect x="0" y="0" width={barWidth} height="20" fill="#ffc107" />
				{/* Porcentaje de aceptación */}
				<text
					x="50%"
					y="50%"
					dominantBaseline="middle"
					textAnchor="middle"
					fill="#000"
					fontSize="12px"
				>
					{acceptanceRate}%
				</text>
			</svg>
		</div>
	);
}
