import React, { useState } from "react";
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
	const pageCount = Math.ceil(mainNews.length / newsPerPage); //total pages in pagination (100/10 = 10)
	const [pageSizeChange, setPageSizeChange] = useState(null);

	const changePage = (data) => {
		/*With the ReactPaginate component, the page numbers are index-based (page 1 of 
		pagination bar is page 0 behind the scenes)*/

		props.setPageNumber(data.selected);
		window.scrollTo(0, 0);
	};

	/*If the logo on top of the page is clicked and the page is redirected to the first/home page,
	we want to update the pagination so that the number 1 in it becomes active. Also, if the page gets 
	refreshed, the pagination number that was active before the refresh remains active. "forcePage" is an 
	in-built property of the React-Paginate component.*/

	const forcePageObj = {};
	if (pageNumber || pageNumber === 0) {
		forcePageObj["forcePage"] = pageNumber;
	}

	/*We want to update pageSizeChange state whenever the following event listener gets triggered. 
	We want to make the size of the pagination bar smaller and display less numbers if the screen 
	size is 419px or less.*/

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
