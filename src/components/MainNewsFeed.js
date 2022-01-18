import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {fetchNews} from '../actions';
import NewsList from './NewsList';


const MainNewsFeed = (props) => {
	const mainNews = useSelector(state => state.mainNews);

	useEffect(() => {
		props.fetchNews('Technology')
	}, [])

	const renderList = mainNews.map((mainNews, index) => {
		return (
			<NewsList key={index} index={index} />
		);
	});

	return (
		<div className="col-md-8">
			<div>{renderList}</div>
		</div>
	);
};

export default connect(null, {fetchNews})(MainNewsFeed);

