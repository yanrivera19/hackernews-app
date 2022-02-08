import React, { useState, useEffect } from "react";
import Header from "./Header";
import PopularNews from "./PopularNews";
import { Routes, Route } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import HomePage from "./HomePage";
import SearchedNews from "./SearchedNews";
import ReactPaginate from "react-paginate";
import { setPageNumber } from "../actions";

const App = (props) => {
	const mainNews = useSelector((state) => state.mainNews.slice(0, 100));
	const pageNumber = useSelector((state) => state.pageNumber);
	const newsPerPage = 10;
	const pageCount = Math.ceil(mainNews.length / newsPerPage);
	const [pageSizeChange, setPageSizeChange] = useState(null);

	const changePage = (data) => {
		props.setPageNumber(data.selected);
		window.scrollTo(0, 0);
	};

	const forcePageObj = {};
	if (pageNumber === 0) {
		forcePageObj["forcePage"] = 0;
	}

	const mql = window.matchMedia("(max-width: 419px)");

	mql.addEventListener("change", (event) => {
		if (event.matches) {
			setPageSizeChange(true);
		} else {
			setPageSizeChange(false);
		}
	});

	return (
		<>
			<Header />
			<div className="container-fluid page-content bg-light">
				<div className="row gx-5">
					<Routes>
						<Route path={"/"} element={<HomePage />} />
						<Route path={"/:newsTerm"} element={<SearchedNews />} />
					</Routes>
					<PopularNews />
				</div>
				<ReactPaginate
					previousLabel={"<<"}
					nextLabel={">>"}
					breakLabel={"..."}
					marginPagesDisplayed={pageSizeChange === true ? 0 : 3}
					pageCount={pageCount}
					{...forcePageObj}
					onPageChange={changePage}
					containerClassName={"pagination justify-content-center"}
					pageClassName={"page-item"}
					pageLinkClassName={"page-link"}
					previousClassName={"page-item"}
					previousLinkClassName={"page-link"}
					nextClassName={"page-item"}
					nextLinkClassName={"page-link"}
					breakClassName={"page-item"}
					breakLinkClassName={"page-link"}
					activeClassName={"active"}
				/>
			</div>
		</>
	);
};

export default connect(null, { setPageNumber })(App);
