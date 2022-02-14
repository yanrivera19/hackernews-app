import news from "../apis/news";
import { FETCH_NEWS, FETCH_TOP_NEWS, SET_PAGE_NUMBER, SET_TERM } from "./types";

export const fetchNews =
	(term = "cybersecurity") =>
	async (dispatch) => {
		const response = await news.get("/everything", {
			params: {
				q: term,
				pageSize: 100,
				language: "en",
				sortBy: "publishedAt",
			},
		});

		dispatch({ type: FETCH_NEWS, payload: response.data.articles });
	};

export const fetchTopNews = (term) => async (dispatch) => {
	const response = await news.get("/top-headlines", {
		params: {
			category: term,
			pageSize: 9,
			language: "en",
		},
	});

	dispatch({ type: FETCH_TOP_NEWS, payload: response.data.articles });
};

export const setPageNumber = (pageNumber) => {
	return {
		type: SET_PAGE_NUMBER,
		payload: pageNumber,
	};
};

export const setTerm = (term) => {
	return {
		type: SET_TERM,
		payload: term,
	};
};
