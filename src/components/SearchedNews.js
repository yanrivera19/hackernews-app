import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {fetchMainNews} from '../actions';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const SearchedNews = (props) => {
	const mainNews = useSelector(state => state.mainNews);

	const renderList = mainNews.map(mainNews => {
		const {title, urlToImage, description, author, publishedAt} = mainNews;
		return (
			<div key={title}>
				<Link to={`/search/newsDetails/${title}`}> 
					<Card style={{ width: '40rem' }}>
						<Card.Img variant="top" src={urlToImage} />
					  	<Card.Body>
					    	<Card.Title>{title}</Card.Title>
					    	<div className="d-inline-flex">
						    	<p style={{paddingRight: 20}}>{author}</p>
						    	<p>{publishedAt}</p>
						    </div>
						    <Card.Text>{description}</Card.Text>
						    <Button variant="primary">Read More</Button>
					  	</Card.Body>
					</Card>
				</Link>
			</div>
		);
	});

	return (
		mainNews.length === 0 ? (
			<div>Sorry, no results were found.</div>
		) : (
			<div className="col-md-8">
				<div>{renderList}</div>
			</div>
		)
	);
};

export default connect(null, {fetchMainNews})(SearchedNews);

