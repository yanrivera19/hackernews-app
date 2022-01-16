import React, {useEffect} from 'react';
import {fetchSelectedMainNews, removeNews} from '../actions';
import {connect, useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

const SelectedMainNews = (props) => {
	const selectedNews = useSelector(state => state.selectedNews);
	const dispatch = useDispatch();
	const {newsTitle} = useParams();

	const {title, urlToImage, content, author, publishedAt} = selectedNews;
	const time = new Date(publishedAt).getTime();
	const day = new Date(time).getDate();
	const monthNames = ["January", "February", "March", "April", "May", "June",
 	"July", "August", "September", "October", "November", "December"];
	const month = monthNames[new Date(time).getMonth()];
	const year = new Date(time).getFullYear();
	const newsDate = `${month} ${day}, ${year}`;

	console.log(newsTitle)
	console.log(selectedNews)

	useEffect(() => {
		window.scrollTo(0, 0);
		if (newsTitle && newsTitle !== '') {
			props.fetchSelectedMainNews(newsTitle);
		}
	}, []);

	return (
		<div className="col-md-8">
			{selectedNews.length === 0 ? (
				<div>Loading...</div>
			) : (
				<div>
					<h1 className="news-title">{title}</h1>
					<div className="d-inline-flex date-author">
						<p style={{paddingRight: 20}}><i class="fa-regular fa-calendar-days" style={{paddingRight: 8}}></i>{newsDate}</p>					    	
					    <p><i className="fa-solid fa-user" style={{paddingRight: 8}}></i>{author}</p>
					</div>
					<img style={{width: '35rem'}} src={urlToImage} alt="newsPic"/>
					<div className="news-content">
						<p>{content}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default connect(null, {fetchSelectedMainNews})(SelectedMainNews);