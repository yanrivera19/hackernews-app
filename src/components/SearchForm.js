import React, { useState } from "react";
import { fetchNews, setPageNumber } from "../actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchForm = (props) => {
	const navigate = useNavigate();
	const [term, setTerm] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();

		if (term !== "") {
			props.fetchNews(term);
			props.setPageNumber(0);
			navigate(`/${term}`);
		}
	};

	const clearInput = () => {
		setTerm("");
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="input-group">
				<input
					type="search"
					className="form-control input-txt"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
					onFocus={clearInput}
					placeholder="Search Here..."
					autoComplete="off"
				/>
				<button
					type="button"
					onClick={onSubmit}
					className="btn btn-primary"
					id="exampleButton1"
				>
					<i className="fas fa-search search-icon"></i>
				</button>
			</div>
		</form>
	);
};

export default connect(null, { fetchNews, setPageNumber })(SearchForm);
