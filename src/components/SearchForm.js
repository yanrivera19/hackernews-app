import React from "react";
import { fetchNews, setPageNumber, setTerm } from "../actions";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchForm = (props) => {
	const newsTerm = useSelector((state) => state.newsTerm);
	const navigate = useNavigate();

	const onSubmit = (event) => {
		event.preventDefault();

		if (newsTerm !== "") {
			props.fetchNews(newsTerm);
			props.setPageNumber(0);
			navigate(`/${newsTerm}`);
		}
	};

	const clearInput = () => {
		props.setTerm("");
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="input-group">
				<input
					type="search"
					className="form-control input-txt"
					value={newsTerm}
					onChange={(e) => props.setTerm(e.target.value)}
					onFocus={clearInput}
					placeholder="Search here..."
					autoComplete="off"
				/>
				<button
					type="button"
					onClick={onSubmit}
					className="btn btn-primary"
				>
					<i className="fas fa-search search-icon"></i>
				</button>
			</div>
		</form>
	);
};

export default connect(null, { fetchNews, setPageNumber, setTerm })(SearchForm);
