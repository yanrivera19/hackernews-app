import React, {useEffect} from 'react';
import { Form, Field } from 'react-final-form';
import {fetchMainNews} from '../actions';
import { connect, useSelector } from 'react-redux'

const SearchForm = (props) => {
	const searchTerm = useSelector(state => state.mainNews)

	console.log(props)

	const renderInput = ({input}) => {
		return (
			<div>
				<input className="form-control" placeholder="Search Here..." autoComplete="off" {...input}/>
			</div>
		);		
	}

	const onSubmit = formValues => {
		console.log(fetchMainNews(formValues))
		props.fetchMainNews(formValues);
	}

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
}

export default connect(null, {fetchMainNews})(SearchForm);