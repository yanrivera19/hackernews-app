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
			<div key={title} className="news-container ">
				<Link to={`/topNewsDetails/${title}`} style={{ textDecoration: 'none' }}> 
  					<div className="col-sm-6">
  						<img style={{width: '8rem'}} src={urlToImage} />
  					</div>
  					<div className="col-sm-6">
  						<p className="news-title pop-title">{title}</p>
  					</div>					
    			</Link>
			</div>		
		);
	});	

	return (
		<div className="col-md-4">
			<h2>Popular This Week</h2>
			<div>{renderList}</div>
		</div>
	);
};

export default connect(null, {fetchTopNews})(PopularNews);