import React, {useEffect, useRef} from 'react';
import { Form, Field } from 'react-final-form';
import {fetchMainNews, removeNews} from '../actions';
import { connect, useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom';

const SearchForm = (props) => {
	const ref = useRef();
	const searchTerm = useSelector(state => state.mainNews);
	const {title} = searchTerm;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const clearInput = () => {
		ref.current.value = '';
	}

	const renderInput = ({input}) => {
		return (
			<div>
				<input ref={ref} className="form-control" placeholder="Search Here..." autoComplete="off" {...input}/>
			</div>
		);		
	};

	const onSubmit = formValues => {
		const formValuesString = JSON.stringify(formValues)
		if (formValues && formValues !== '') {
			props.fetchMainNews(formValues);			
			navigate(`/search/${formValuesString}`);
		}
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

export default connect(null, {fetchMainNews})(SearchForm);