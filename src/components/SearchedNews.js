import React, {useState, useEffect} from 'react';
import {useSelector, connect} from 'react-redux';
import NewsList from './NewsList';
import {setPageNumber} from '../actions';

const SearchedNews = (props) => {
	const searchedNews = useSelector(state => state.mainNews);
	const pageNumber = useSelector(state => state.pageNumber);

	useEffect(() => {
		props.setPageNumber(1)
	})

	const renderList = searchedNews.map((searchedNews, index) => {
		return (
			searchedNews.length === 0 ? (
				<div>Sorry, no results were found.</div>
			) : (
				<NewsList key={index} index={index}/>
			)
		);
	});

	return (		
		<div className="col-md-8">
			<div>{renderList}</div>
		</div>		
	);
};

export default connect(null, {setPageNumber})(SearchedNews);

