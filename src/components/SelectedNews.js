import React, {useEffect} from 'react';
import {fetchSelectedNews} from '../actions';
import {connect, useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import NewsDetails from './NewsDetails';

const SelectedNews = (props) => {
	const {newsTitle} = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
		if (newsTitle && newsTitle !== '') {
			props.fetchSelectedNews(newsTitle);
		}
	}, []);

	return (
		<NewsDetails />
	);
};

export default connect(null, {fetchSelectedNews})(SelectedNews);