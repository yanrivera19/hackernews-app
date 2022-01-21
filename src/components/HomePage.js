import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {fetchNews, setNewsTerm, setPageNumber} from '../actions';
import NewsList from './NewsList';

const HomePage = (props) => {
	const mainNews = useSelector(state => state.mainNews);
	const pageNumber = useSelector(state => state.pageNumber);

	useEffect(() => {
		props.setPageNumber(1)
		props.fetchNews('cybersecurity', 1);
		props.setNewsTerm('cybersecurity');		
		console.log(pageNumber)
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

export default connect(null, {fetchNews, setNewsTerm, setPageNumber})(HomePage);

