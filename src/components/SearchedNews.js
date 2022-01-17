import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import NewsList from './NewsList';

const SearchedNews = (props) => {
	const mainNews = useSelector(state => state.mainNews);
	
	const renderList = mainNews.map(mainNews => {
		return (
			<NewsList mainNews={mainNews} />
		);
	});

	return (
		mainNews.length === 0 ? (
			<div>Sorry, no results were found.</div>
		) : (
			<div className="col-md-8">
				<div>{renderList}</div>
			</div>
		)
	);
};

export default SearchedNews;

