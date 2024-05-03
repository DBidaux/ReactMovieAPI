import "./Pagination.css";
export default function Pagination({ pages, setPages }) {
	const pageRange = (num) => (num ? [...Array(num + 1).keys()].slice(1) : []);

	const changePage = (e) => {
		let nextPage;
		switch (e.target.textContent) {
			case "Prev":
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

	const renderPageButtons = () => {
		const totalPages = pages.total;
		const currentPage = pages.current;

		let buttons = [];

		buttons.push(
			<li key="prev">
				<PageButton handler={changePage} text="Prev"></PageButton>
			</li>
		);

		if (currentPage > 2) {
			buttons.push(
				<li key="first">
					<PageButton handler={changePage} text="1"></PageButton>
				</li>
			);
		}

		if (currentPage > 3) {
			buttons.push(<li key="left-ellipsis">...</li>);
		}

		for (let i = currentPage - 1; i <= currentPage + 1; i++) {
			if (i >= 1 && i <= totalPages) {
				buttons.push(
					<li key={i}>
						<PageButton
							handler={changePage}
							text={i}
							active={i === currentPage}
						></PageButton>
					</li>
				);
			}
		}

		if (currentPage < totalPages - 2) {
			buttons.push(<li key="right-ellipsis">...</li>);
		}

		if (currentPage < totalPages - 1) {
			buttons.push(
				<li key="last">
					<PageButton
						handler={changePage}
						text={totalPages}
					></PageButton>
				</li>
			);
		}
		buttons.push(
			<li key="Next">
				<PageButton handler={changePage} text="Next"></PageButton>
			</li>
		);
		return buttons;
	};

	return (
		<div className="pagination-container">
			<ul>{renderPageButtons()}</ul>
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
