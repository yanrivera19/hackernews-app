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
	const [pageSizeChange, setPageSizeChange] = useState();

	console.log(pageNumber)
	const changePage = (data) => {
		/*With the ReactPaginate component, the page numbers are index-based (page 1 of 
		pagination bar is page 0 behind the scenes)*/

		props.setPageNumber(data.selected);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

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
			<div className="container-fluid page-content bg-light pb-4">
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
					marginPagesDisplayed={pageSizeChange ? 0 : 3}
					pageCount={pageCount}
					forcePage={pageNumber}
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
			<footer>
				<div className="container-fluid text-center text-white py-5">
					<h3 className="fs-4 fw-bold">
						Subscribe to our email list!
					</h3>

					<div className="input-group subscribe mb-4 mt-4">
						<input
							type="text"
							className="form-control input-txt"
							placeholder="Enter email"
						/>
						<button
							className="btn btn-success border-rad"
							type="button"
						>
							Subscribe
						</button>
					</div>
					<div className="social-media d-flex justify-content-center fs-5">
						<a href="/#">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="/#">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="/#">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="/#">
							<i className="fab fa-youtube"></i>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default connect(null, { setPageNumber })(App);
