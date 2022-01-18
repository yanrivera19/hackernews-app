import React, {useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import NewsDetails from './NewsDetails';

const SelectedNews = () => {
	const {newsIndex} = useParams();
	const mainNews = useSelector(state => state.mainNews)

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<NewsDetails selectedNews={mainNews} index={newsIndex}/>
	);
};

export default SelectedNews;