import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SearchForm from './SearchForm';
import {setPageNumber} from '../actions';

const Header = (props) => {

	const resetPageNumber = () => {
		props.setPageNumber(0);
	}

	return (
		<div style={{paddingBottom: '20px'}} className="bg-light">
			<nav className="navbar navbar-expand-lg navbar-light" style={{paddingBottom: '30px'}}>
				<div id="content" className="container-fluid">
					<Link to="/" onClick={resetPageNumber} style={{ textDecoration: 'none' }}>		
						<h1 className="navbar-brand text-light fs-1" >The Hacker News</h1>
					</Link>							    			    	
				</div>
			</nav>
			<div className=" py-4 search-bar">
				<SearchForm />
			</div>						
		</div>
	);
};

export default connect(null, {setPageNumber})(Header);