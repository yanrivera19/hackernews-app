import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {fetchNews, setNewsTerm} from '../actions';
import NewsList from './NewsList';

const PaginatedNewsFeed = (props) => {
	const mainNews = useSelector(state => state.mainNews);
	const newsTerm = useSelector(state => state.newsTerm);

	useEffect(() => {
		props.fetchNews(newsTerm)
	}, [])

	const renderList = mainNews.map((mainNews, index) => {
		return (
			<NewsList key={index} index={index} />
		);
	});

	return (
		<div className="col-md-9">
			<div>{renderList}</div>
		</div>
	);
};

export default connect(null, {fetchNews})(PaginatedNewsFeed);

