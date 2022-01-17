import React, {useState, useEffect} from 'react';
import {useSelector, connect} from 'react-redux';
import NewsList from './NewsList';
import {fetchNews} from '../actions';

const SearchedNews = (props) => {
	const searchedNews = useSelector(state => state.mainNews);

	useEffect(() => {
		const searchTerm = JSON.parse(localStorage.getItem("searchTerm"));

		props.fetchNews(searchTerm[0]);
	}, [])
	
	const renderList = searchedNews.map(searchedNews => {
		return (
			searchedNews.length === 0 ? (
				<div>Sorry, no results were found.</div>
			) : (
				<NewsList key={searchedNews.title} mainNews={searchedNews} />
			)
		);
	});

	return (		
		<div className="col-md-8">
			<div>{renderList}</div>
		</div>		
	);
};

export default connect(null, {fetchNews})(SearchedNews);

