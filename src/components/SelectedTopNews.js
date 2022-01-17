import React, {useEffect} from 'react';
import {fetchSelectedTopNews, removeNews} from '../actions';
import {connect, useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import NewsDetails from './NewsDetails';

const SelectedTopNews = (props) => {
	const selectedNews = useSelector(state => state.selectedNews);
	// const dispatch = useDispatch();
	const {topNewsTitle} = useParams();

	console.log(topNewsTitle)

	useEffect(() => {
		window.scrollTo(0, 0);
		if (topNewsTitle && topNewsTitle !== '') {
			props.fetchSelectedTopNews(topNewsTitle);
			console.log('success')
		}
	}, []);

	return (
		<NewsDetails selectedNews={selectedNews}/>
	);
};

export default connect(null, {fetchSelectedTopNews})(SelectedTopNews);