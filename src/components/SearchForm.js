import React, {useEffect, useState} from 'react';
import {fetchNews, setNewsTerm, setPageNumber} from '../actions';
import {connect, useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import SearchedNews from './SearchedNews';

const SearchForm = (props) => {
	const navigate = useNavigate();
	const [term, setTerm] = useState('');

	const onSubmit = event => {
		event.preventDefault();

		if (term !== '') {
			props.fetchNews(term);
			props.setNewsTerm(term);
			props.setPageNumber(0)
			navigate(`/${term}`);
		};
	};

	const clearInput = () => {
		setTerm('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="input-group">
				<input type="search" className="form-control" value={term} onChange={e => setTerm(e.target.value)} onFocus={clearInput} placeholder="Search Here..." autoComplete="off" />
			    <button type="button" onClick={onSubmit} className="btn btn-primary " id="exampleButton1"><i className="fas fa-search"></i></button>
			</div>
		</form>		
	);
};

export default connect(null, {fetchNews, setNewsTerm, setPageNumber})(SearchForm);
