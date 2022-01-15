import news from '../apis/news';
import {
	FETCH_MAIN_NEWS, 
	FETCH_TOP_NEWS,
	FETCH_SELECTED_MAIN_NEWS,
	FETCH_SELECTED_TOP_NEWS
} from './types';

export const fetchMainNews = term => async dispatch => {
	const response = await news.get('/everything', {
		params: {
			q: term,
			pageSize: 8,
			page: 10,
			language: 'en',
		}
	});
	
	dispatch({type: FETCH_MAIN_NEWS, payload: response.data.articles});
}

export const fetchTopNews = () => async dispatch => {
	const response = await news.get('/top-headlines', {
		params: {
			category: 'Technology',
			pageSize: 9,
			language: 'en'
		}
	});

	dispatch({type: FETCH_TOP_NEWS, payload: response.data.articles});
}

export const fetchSelectedMainNews = (title) => async dispatch => {
	const response = await news.get('/everything', {
		params: {
			q: title
		}
	});

	dispatch({type: FETCH_SELECTED_MAIN_NEWS, payload: response.data.articles[0]})
}

export const fetchSelectedTopNews = (title) => async dispatch => {
	const response = await news.get('/top-headlines', {
		params: {
			q: title
		}
	});
	console.log('success')

	dispatch({type: FETCH_SELECTED_TOP_NEWS, payload: response.data.articles[0]})
}