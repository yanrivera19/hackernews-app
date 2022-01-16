import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {fetchMainNews} from '../actions';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const MainNewsFeed = (props) => {
	const mainNews = useSelector(state => state.mainNews);

	useEffect(() => {
		props.fetchMainNews('Technology')
	}, [])

	console.log(mainNews.length)

	const renderList = mainNews.map(mainNews => {
		const {title, urlToImage, description, author, publishedAt} = mainNews;
		
		const time = new Date(publishedAt).getTime();
		const day = new Date(time).getDate();
		const monthNames = ["January", "February", "March", "April", "May", "June",
 		"July", "August", "September", "October", "November", "December"];
		const month = monthNames[new Date(time).getMonth()];
		const year = new Date(time).getFullYear();
		const newsDate = `${month} ${day}, ${year}`;

		return (
			<div key={title} className="news-container pb-4">
				<Link to={`/newsDetails/${title}`} style={{ textDecoration: 'none' }}> 
					<Card className="news-card">
					  <Card.Img variant="top" src={urlToImage} />
					  <Card.Body>
					    <Card.Title className="news-title">{title}</Card.Title>
					    <div className="d-inline-flex date-author">					    	
					    	<p style={{paddingRight: 20}}><i class="fa-regular fa-calendar-days" style={{paddingRight: 8}}></i>{newsDate}</p>					    	
					    	<p><i className="fa-solid fa-user" style={{paddingRight: 8}}></i>{author}</p>
					    </div>
					    <Card.Text className="news-content">{description}</Card.Text>
					    <Button variant="primary">Read More</Button>
					  </Card.Body>
					</Card>
				</Link>
			</div>
		)
	})

	return (
		<div className="col-md-8">
			<div>{renderList}</div>
		</div>
	);
};

export default connect(null, {fetchMainNews})(MainNewsFeed);

