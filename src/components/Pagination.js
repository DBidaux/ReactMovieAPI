import "./Pagination.css";
export default function Pagination({ pages, setPages }) {
	const pageRange = (num) => (num ? [...Array(num + 1).keys()].slice(1) : []);

	const changePage = (e) => {
		let nextPage;
		switch (e.target.textContent) {
			case "Previous":
				nextPage = pages.current - 1;
				break;
			case "Next":
				nextPage = pages.current + 1;
				break;
			default:
				nextPage = Number(e.target.textContent);
				break;
		}
		if (nextPage >= 1 && nextPage <= pages.total) {
			setPages((prevPages) => ({ ...prevPages, current: nextPage }));
		}
	};

	return (
		<div className="pagination-container">
			<nav>
				<ul>
					<li>
						<PageButton
							handler={changePage}
							text="Previous"
						></PageButton>
					</li>

					{pageRange(pages.total).map((page) => {
						return (
							<PageButton
								key={page}
								handler={changePage}
								text={page}
								active={page === pages.current}
							/>
						);
					})}

					<li>
						<PageButton
							handler={changePage}
							text="Next"
						></PageButton>
					</li>
				</ul>
			</nav>
		</div>
	);
}

function PageButton({ handler, text, active }) {
	return (
		<button
			onClick={handler}
			className={`page-item ${active ? "active" : ""}`}
		>
			{text}
		</button>
	);
}
