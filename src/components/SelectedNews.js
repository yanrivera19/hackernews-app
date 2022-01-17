import React, {useEffect} from 'react';
import {fetchSelectedNews} from '../actions';
import {connect, useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import NewsDetails from './NewsDetails';

const SelectedNews = (props) => {
	const selectedNews = useSelector(state => state.selectedNews);
	const {newsTitle} = useParams();
	
	console.log(newsTitle)
	console.log(selectedNews)

	useEffect(() => {
		window.scrollTo(0, 0);
		if (newsTitle && newsTitle !== '') {
			props.fetchSelectedNews(newsTitle);
		}
	}, []);

	return (
		<NewsDetails selectedNews={selectedNews}/>
	);
};

export default connect(null, {fetchSelectedNews})(SelectedNews);