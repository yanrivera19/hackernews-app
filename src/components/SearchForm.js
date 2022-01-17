import React, {useEffect, useRef, useState} from 'react';
import { Form, Field } from 'react-final-form';
import {fetchNews} from '../actions';
import { connect, useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import SearchedNews from './SearchedNews';

const SearchForm = (props) => {
	const ref = useRef();
	const navigate = useNavigate();

	const renderInput = ({input}) => {
		return (
			<div>
				<input ref={ref} className="form-control" placeholder="Search Here..." autoComplete="off" {...input}/>
			</div>
		);		
	};

	const onSubmit = formValues => {
		if (formValues && formValues !== '') {
			props.fetchNews(formValues.search);
			saveToLocalStorage(formValues.search);			
			navigate(`/search/${formValues.search}`);
		}
	};

	const saveToLocalStorage = (term) => {
		let searchTerm;

		if(localStorage.getItem("searchTerm") === null) {
			searchTerm = [];
		} else {
			searchTerm = JSON.parse(localStorage.getItem("searchTerm"));
		};	

		searchTerm.shift();
		searchTerm.push(term);
		localStorage.setItem("searchTerm", JSON.stringify(searchTerm));
	};

	return (
		<Form 
			onSubmit={onSubmit}
			render={({handleSubmit}) => (
				<form onSubmit={handleSubmit}>
					<Field name="search" component={renderInput}/>						
				</form>
			)}
		/>
	);
};

export default connect(null, {fetchNews})(SearchForm);