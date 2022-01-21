import React, {useState, useEffect} from 'react';
import {useSelector, connect} from 'react-redux';
import NewsList from './NewsList';
import {setPageNumber} from '../actions';

const SearchedNews = (props) => {
	const searchedNews = useSelector(state => state.mainNews);
	const pageNumber = useSelector(state => state.pageNumber);
	const newsTerm = useSelector(state => state.newsTerm);

	useEffect(() => {
		props.setPageNumber(1)
	})

	const renderList = searchedNews.map((searchedNews, index) => {
		return (
			<NewsList key={index} index={index}/>
		);
	});

	return (		
		<div className="col-md-8">
			{searchedNews.length > 0 ? (
				<>
					<h5 className="results-msg" style={{paddingBottom: '30px'}}>{`Search results for ${newsTerm}:`}</h5>
					<div>{renderList}</div>
				</>	
			) : (
				<h4 className="no-results-msg" style={{paddingBottom: '40px'}}>Sorry, no results were found :(</h4>
			) }		
		</div>		
	);
};

export default connect(null, {setPageNumber})(SearchedNews);

