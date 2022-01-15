import React, {useEffect} from 'react';
import {fetchSelectedTopNews} from '../actions';
import {connect, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const SelectedTopNews = (props) => {
	const selectedTopNews = useSelector(state => state.selectedTopNews);

	const {topNewsTitle} = useParams();

	console.log(topNewsTitle)
	console.log(selectedTopNews)

	useEffect(() => {
		if (topNewsTitle && topNewsTitle !== '') {
			props.fetchSelectedTopNews(topNewsTitle);
			console.log('success')
		}
	}, [topNewsTitle]);

	return (
		<div className="col-md-8">
			{Object.keys(selectedTopNews).length === 0 ? (
				<div>Loading...</div>
			) : (
				<div>
					<h1>{selectedTopNews.title}</h1>
					<div className="d-inline-flex">
						<p>{selectedTopNews.publishedAt}</p>
						<p>{selectedTopNews.author}</p>
					</div>
					<img style={{width: '40rem'}} src={selectedTopNews.urlToImage} />
					<div>
						<p>{selectedTopNews.content}</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default connect(null, {fetchSelectedTopNews})(SelectedTopNews);