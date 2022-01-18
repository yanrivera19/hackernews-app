import {
	FETCH_NEWS, 
	FETCH_TOP_NEWS,
} from '../actions/types';

const INITIAL_STATE = {
	mainNews: [],
	topHeadlines: [],
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_NEWS:
			return {...state, mainNews: action.payload};
		case FETCH_TOP_NEWS:
			return {...state, topHeadlines: action.payload};						
		default:
			return state;
	}
}