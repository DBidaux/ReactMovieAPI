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
		<nav className="d-flex justify-content-center mt-3">
			<ul className="pagination mb-0">
				<PageButton handler={changePage} text="Previous"></PageButton>
				<div className="d-none d-md-flex">
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
				</div>
				<PageButton handler={changePage} text="Next"></PageButton>
			</ul>
		</nav>
	);
}

function PageButton({ handler, text, active }) {
	return (
		<li className={`page-item ${active && "active"}`}>
			<button onClick={handler} className="page-link">
				{text}
			</button>
		</li>
	);
}
