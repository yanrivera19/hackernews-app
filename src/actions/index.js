import news from '../apis/news';
import {
	FETCH_NEWS, 
	FETCH_TOP_NEWS,
	SET_NEWS_TERM,
	SET_PAGE_NUMBER
} from './types';

export const fetchNews = term => async dispatch => {
	const response = await news.get('/everything', {
		params: {
			q: term,
			pageSize: 100,
			language: 'en',
			sortBy: 'publishedAt'
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

	dispatch({type: FETCH_TOP_NEWS, payload: response.data.articles});
};

export const setNewsTerm = term  => {
	return {
		type: SET_NEWS_TERM,
		payload: term
	};
};

export const setPageNumber = pageNumber => {
	return {
		type: SET_PAGE_NUMBER,
		payload: pageNumber
	};
};