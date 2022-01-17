import React, {useEffect} from 'react';
import {fetchSelectedMainNews, removeNews} from '../actions';
import {connect, useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import NewsDetails from './NewsDetails';

const SelectedMainNews = (props) => {
	const selectedNews = useSelector(state => state.selectedNews);
	// const dispatch = useDispatch();
	const {newsTitle} = useParams();
	
	console.log(newsTitle)
	console.log(selectedNews)

	useEffect(() => {
		window.scrollTo(0, 0);
		if (newsTitle && newsTitle !== '') {
			props.fetchSelectedMainNews(newsTitle);
		}
	}, []);

	return (
		<NewsDetails selectedNews={selectedNews}/>
	);
};

export default connect(null, {fetchSelectedMainNews})(SelectedMainNews);