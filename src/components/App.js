import React from 'react';
import Header from './Header';
import PopularNews from './PopularNews';
import {Routes, Route} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import HomePage from './HomePage';
import SelectedNews from './SelectedNews';
import SelectedPopularNews from './SelectedPopularNews';
import SearchedNews from './SearchedNews';
import ReactPaginate from 'react-paginate';
import {setPageNumber} from '../actions';

const App = props => {
	const mainNews = useSelector(state => state.mainNews.slice(0, 100));
	const pageNumber = useSelector(state => state.pageNumber);
	const newsPerPage = 10;
	const newsSeen = pageNumber * newsPerPage;
	const pageCount = Math.ceil(mainNews.length / newsPerPage);

	const changePage = (data) => {
		props.setPageNumber(data.selected);
		window.scrollTo(0, 0);
	};
	
	const forcePageObj = {};
  	if (pageNumber === 0) {
    	forcePageObj['forcePage'] = 0;
  	};

	return (
		<>
			<Header />
			<div className="container-fluid page-content bg-light">
				<div className="row gx-5">
					<Routes>
						<Route path={'/'} element={<HomePage/>}/>
						<Route path={'/:newsTerm'} element={<SearchedNews/>}/>
						<Route path={'/newsDetails/:newsIndex'} element={<SelectedNews/>}/>
						<Route path={'/topNewsDetails/:topNewsIndex'} element={<SelectedPopularNews/>}/>
					</Routes>
					<PopularNews />
					<ReactPaginate
						previousLabel={"Previous"}
				        nextLabel={"Next"}
				        breakLabel={"..."}
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
			</div>
		</>
	);
};

export default connect(null, {setPageNumber})(App); 