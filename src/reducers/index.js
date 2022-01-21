import {
	FETCH_NEWS, 
	FETCH_TOP_NEWS,
	SET_NEWS_TERM,
	SET_PAGE_NUMBER
} from '../actions/types';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //use localstorage as default storage

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['mainNews', 'topHeadlines', 'newsTerm', 'pageNumber']
};

const INITIAL_STATE = {
	mainNews: [],
	topHeadlines: [],
	newsTerm: [],
	pageNumber: []
};

export const newsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_NEWS:
			return {...state, mainNews: action.payload};
		case FETCH_TOP_NEWS:
			return {...state, topHeadlines: action.payload};
		case SET_NEWS_TERM:
			return {...state, newsTerm: action.payload};
		case SET_PAGE_NUMBER:
			return {...state, pageNumber: action.payload};								
		default:
			return state;
	};
};

export default persistReducer(persistConfig, newsReducer);