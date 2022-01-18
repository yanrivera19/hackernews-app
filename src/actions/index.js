import news from '../apis/news';
import {
	FETCH_NEWS, 
	FETCH_TOP_NEWS
} from './types';

export const fetchNews = term => async dispatch => {
	const response = await news.get('/everything', {
		params: {
			q: term,
			pageSize: 8,
			page: 10,
			language: 'en',
		}
	});

	dispatch({type: FETCH_NEWS, payload: response.data.articles});
};

export const fetchTopNews = term => async dispatch => {
	const response = await news.get('/top-headlines', {
		params: {
			category: term,
			pageSize: 9,
			language: 'en'
		}
	});

	console.log('success')

	dispatch({type: FETCH_TOP_NEWS, payload: response.data.articles});
};
