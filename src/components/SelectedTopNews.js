import React, {useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import NewsDetails from './NewsDetails';

const SelectedTopNews = () => {
	const {topNewsIndex} = useParams();
	const topHeadlines = useSelector(state => state.topHeadlines);

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<NewsDetails selectedNews={topHeadlines} index={topNewsIndex}/>
	);
};

export default SelectedTopNews;