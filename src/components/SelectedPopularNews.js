import React, {useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import NewsDetails from './NewsDetails';

const SelectedPopularNews = () => {
	const {topNewsIndex} = useParams();
	const topHeadlines = useSelector(state => state.topHeadlines);

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<NewsDetails selectedNews={topHeadlines} index={topNewsIndex}/>
	);
};

export default SelectedPopularNews;