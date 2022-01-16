import React, {useEffect} from 'react';
import { Form, Field } from 'react-final-form';
import {fetchMainNews, removeNews} from '../actions';
import { connect, useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom';

const SearchForm = (props) => {
	const searchTerm = useSelector(state => state.mainNews);
	const {title} = searchTerm;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// const clearInput = (formValues) => {
	// 	formValues === '';
	// }

	// onFocus={clearInput}
	const renderInput = ({input}) => {
		return (
			<div>
				<input  className="form-control" placeholder="Search Here..." autoComplete="off" {...input}/>
			</div>
		);		
	};

	const onSubmit = formValues => {
		if (formValues && formValues !== '') {
			props.fetchMainNews(formValues);
			// const formValuesString = JSON.stringify(formValues)
			// navigate(`/search/${formValuesString}`)
		}

		// return () => {
		// 	dispatch(removeNews())
		// };
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