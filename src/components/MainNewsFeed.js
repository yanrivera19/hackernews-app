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
			<div key={title}>
				<Link to={`/newsDetails/${title}`} style={{ textDecoration: 'none' }}> 
					<Card style={{ width: '40rem' }}>
					  <Card.Img variant="top" src={urlToImage} />
					  <Card.Body>
					    <Card.Title>{title}</Card.Title>
					    <div className="d-inline-flex">
					    	<i className="fa-light fa-calendar-days"></i>
					    	<p style={{paddingRight: 20}}>{newsDate}</p>
					    	<i className="fa-solid fa-user"></i>
					    	<p>{author}</p>
					    </div>
					    <Card.Text>{description}</Card.Text>
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

