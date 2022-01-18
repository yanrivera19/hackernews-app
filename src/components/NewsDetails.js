import React from 'react';
import {useSelector} from 'react-redux';

const NewsDetails = () => {
	const selectedNews = useSelector(state => state.selectedNews);
	const {title, urlToImage, content, author, publishedAt} = selectedNews;

	const time = new Date(publishedAt).getTime();
	const day = new Date(time).getDate();
	const monthNames = ["January", "February", "March", "April", "May", "June",
 	"July", "August", "September", "October", "November", "December"];
	const month = monthNames[new Date(time).getMonth()];
	const year = new Date(time).getFullYear();
	const newsDate = `${month} ${day}, ${year}`;

	return (
		<div className="col-md-8">
			{selectedNews.length === 0 ? (
				<div>Loading...</div>
			) : (
				<div>
					<h1 className="news-title">{title}</h1>
					<div className="d-inline-flex date-author">
						<p style={{paddingRight: 20}}><i className="fa-regular fa-calendar-days" style={{paddingRight: 8}}></i>{newsDate}</p>					    	
					    <p><i className="fa-solid fa-user" style={{paddingRight: 8}}></i>{author}</p>
					</div>
					<img className="selected-news-img" style={{width: '18rem'}} src={urlToImage} alt="newsPic"/>
					<div className="news-content">
						<p>{content}</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default NewsDetails;