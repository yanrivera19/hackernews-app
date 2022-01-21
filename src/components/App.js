import React from 'react';
import Header from './Header';
import PopularNews from './PopularNews';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import HomePage from './HomePage';
import SelectedNews from './SelectedNews';
import SelectedTopNews from './SelectedTopNews';
import SearchedNews from './SearchedNews';
import PaginatedNewsFeed from './PaginatedNewsFeed';
import ReactPaginate from 'react-paginate';
import {fetchNews, setPageNumber} from '../actions'

const App = props => {
	const newsTerm = useSelector(state => state.newsTerm);
	const pageNumber = useSelector(state => state.pageNumber);
	const navigate = useNavigate();
	
	let forcePageObj = {}
  	if (pageNumber === 1) {
    	forcePageObj['forcePage'] = 0
  	}

	const handlePageClick = data => {
		const currentPage = data.selected + 1;

		props.fetchNews(newsTerm, currentPage);
		props.setPageNumber(currentPage);
		navigate(`/news/${newsTerm}`)
		window.scrollTo(0, 0);
	}

	return (
		<>
			<Header />
			<div className="container-fluid page-content">
				<div className="row gx-5">
					<Routes>
						<Route path={'/'} element={<HomePage/>}/>
						<Route path={'/news/:newsTerm'} element={<PaginatedNewsFeed/>}/>
						<Route path={'/:newsTerm'} element={<SearchedNews/>}/>
						<Route path={'/newsDetails/:newsIndex'} element={<SelectedNews/>}/>
						<Route path={'/topNewsDetails/:topNewsIndex'} element={<SelectedTopNews/>}/>
					</Routes>
					<PopularNews />
				</div>
			</div>
			<ReactPaginate
				previousLabel={"previous"}
		        nextLabel={"next"}
		        breakLabel={"..."}
		        pageCount={10}
		        {...forcePageObj}
		        onPageChange={handlePageClick}
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
		</>
	);
};

export default connect(null, {fetchNews, setPageNumber})(App); 