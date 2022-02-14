import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchNews, setTerm } from "../actions";
import NewsList from "./NewsList";

const HomePage = ({ fetchNews, setTerm }) => {
	const mainNews = useSelector((state) => state.mainNews);
	const pageNumber = useSelector((state) => state.pageNumber);
	const newsPerPage = 10;
	const firstNewsOnPage = pageNumber * newsPerPage;

	useEffect(() => {
		fetchNews();
		setTerm("");
	}, [fetchNews, setTerm]);

	/*We display 10 news articles per page with a continuation throughout the pages. 
	Page 1 will display the articles 0-9 from the mainNews state, page 2 displays articles 10-19,
	and so on with the rest of the pages.*/
	const renderList = mainNews
		.slice(firstNewsOnPage, firstNewsOnPage + newsPerPage)
		.map((mainNews, index) => {
			return <NewsList key={index} news={mainNews} index={index} />;
		});

	return (
		<div className="col-md-9">
			<div>{renderList}</div>
		</div>
	);
};

export default connect(null, { fetchNews, setTerm })(HomePage);
