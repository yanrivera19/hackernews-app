import React, {useEffect} from 'react';
import {fetchSelectedTopNews} from '../actions';
import {connect, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';


const SelectedTopNews = (props) => {
	const selectedTopNews = useSelector(state => state.selectedTopNews);
	const {title, urlToImage, content, author, publishedAt} = selectedTopNews;

	const {topNewsTitle} = useParams();

	console.log(topNewsTitle)

	useEffect(() => {
		if (topNewsTitle && topNewsTitle !== '') {
			props.fetchSelectedTopNews(topNewsTitle);
			console.log('success')
		}
	}, [topNewsTitle]);

	return (
		<div className="col-md-8">
			{selectedTopNews.length === 0 ? (
				<div>Loading...</div>
			) : (
				<div>
					<h1>{title}</h1>
					<div className="d-inline-flex">
						<p>{publishedAt}</p>
						<p>{author}</p>
					</div>
					<img style={{width: '40rem'}} src={urlToImage} />
					<div>
						<p>{content}</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default connect(null, {fetchSelectedTopNews})(SelectedTopNews);