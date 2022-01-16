import React, {useEffect} from 'react';
import {fetchSelectedTopNews, removeNews} from '../actions';
import {connect, useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';


const SelectedTopNews = (props) => {
	const selectedTopNews = useSelector(state => state.selectedTopNews);
	const dispatch = useDispatch();
	const {topNewsTitle} = useParams();

	const {title, urlToImage, content, author, publishedAt} = selectedTopNews;
	const time = new Date(publishedAt).getTime();
	const day = new Date(time).getDate();
	const monthNames = ["January", "February", "March", "April", "May", "June",
 	"July", "August", "September", "October", "November", "December"];
	const month = monthNames[new Date(time).getMonth()];
	const year = new Date(time).getFullYear();
	const newsDate = `${month} ${day}, ${year}`;

	console.log(topNewsTitle)

	useEffect(() => {
		window.scrollTo(0, 0);
		if (topNewsTitle && topNewsTitle !== '') {
			props.fetchSelectedTopNews(topNewsTitle);
			console.log('success')
		}
	}, []);

	return (
		<div className="col-md-8">
			{selectedTopNews.length === 0 ? (
				<div>Loading...</div>
			) : (
				<div>
					<h1 className="news-title">{title}</h1>
					<div className="d-inline-flex date-author">
						<p style={{paddingRight: 20}}><i class="fa-regular fa-calendar-days" style={{paddingRight: 8}}></i>{newsDate}</p>					    	
					    <p><i className="fa-solid fa-user" style={{paddingRight: 8}}></i>{author}</p>
					</div>
					<img style={{width: '35rem'}} src={urlToImage} />
					<div className="news-content">
						<p>{content}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default connect(null, {fetchSelectedTopNews})(SelectedTopNews);