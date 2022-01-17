import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {fetchTopNews} from '../actions';
import {Card, } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const PopularNews = (props) => {
	const topHeadlines = useSelector(state => state.topHeadlines);

	
	useEffect(() => {
		props.fetchTopNews('Technology')
	}, []);

	console.log(topHeadlines);


	const renderList = topHeadlines.map(topHeadline => {
		const {title, urlToImage} = topHeadline;
		return (
			<div key={title} className="news-container pop-container">
				<Link to={`/topNewsDetails/${title}`} style={{ textDecoration: 'none' }}> 
  					<div style={{paddingBottom: '20px'}}>
  						<img  src={urlToImage} className="pop-img" />
  						<p className="news-title pop-title fw-bold">{title}</p>
  					</div>					
    			</Link>
			</div>		
		);
	});	

	return (
		<div className="col-md-4 pop-news">
			<h4 className="pb-3" style={{textDecoration: 'underline'}}>Popular This Week</h4>
			<div>{renderList}</div>
		</div>
	);
};

export default connect(null, {fetchTopNews})(PopularNews);