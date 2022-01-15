import React, {useEffect} from 'react';
import {fetchSelectedMainNews} from '../actions';
import {connect, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const SelectedMainNews = (props) => {
	const selectedNews = useSelector(state => state.selectedNews);
	const {title, urlToImage, content, author, publishedAt} = selectedNews;

	const {newsTitle} = useParams();

	console.log(newsTitle)
	console.log(selectedNews)

	useEffect(() => {
		if (newsTitle && newsTitle !== '') {
			props.fetchSelectedMainNews(newsTitle);
		}
	}, [newsTitle]);

	return (
		<div className="col-md-8">
			{selectedNews.length === 0 ? (
				<div>Loading...</div>
			) : (
				<div>
					<h1>{title}</h1>
					<div className="d-inline-flex">
						<p>{publishedAt}</p>
						<p>{author}</p>
					</div>
					<img style={{width: '40rem'}} src={urlToImage} alt="newsPic"/>
					<div>
						<p>{content}</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default connect(null, {fetchSelectedMainNews})(SelectedMainNews);