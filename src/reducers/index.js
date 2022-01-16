import {
	FETCH_MAIN_NEWS, 
	FETCH_TOP_NEWS,
	FETCH_SELECTED_MAIN_NEWS,
	FETCH_SELECTED_TOP_NEWS,
	REMOVE_NEWS
} from '../actions/types';

const INITIAL_STATE = {
	mainNews: [],
	topHeadlines: [],
	selectedNews: [],
	selectedTopNews: []
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_MAIN_NEWS:
			return {...state, mainNews: action.payload};
		case FETCH_TOP_NEWS:
			return {...state, topHeadlines: action.payload};
		case FETCH_SELECTED_MAIN_NEWS:
			return {...state, selectedNews: action.payload};
		case FETCH_SELECTED_TOP_NEWS:
			return {...state, selectedTopNews: action.payload};
		case REMOVE_NEWS:
			return {};				
		default:
			return state;
	}
}