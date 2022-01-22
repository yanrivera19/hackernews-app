import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {fetchNews, setNewsTerm} from '../actions';
import NewsList from './NewsList';

const HomePage = (props) => {
	const mainNews = useSelector(state => state.mainNews);
	const pageNumber = useSelector(state => state.pageNumber);
	const newsPerPage = 10;
  	const firstNewsOnPage = pageNumber * newsPerPage;

	useEffect(() => {
		props.fetchNews('cybersecurity');
		props.setNewsTerm('cybersecurity');	
	}, []);

	const renderList = mainNews.slice(firstNewsOnPage, firstNewsOnPage + newsPerPage).map((mainNews, index) => {
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

export default connect(null, {fetchNews, setNewsTerm})(HomePage);

