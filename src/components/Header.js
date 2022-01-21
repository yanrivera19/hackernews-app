import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import SearchForm from './SearchForm';

const Header = () => {
	return (
		<div style={{paddingBottom: '20px'}}>
			<nav className="navbar navbar-expand-lg navbar-light" style={{paddingBottom: '30px'}}>
				<div id="content" className="container-fluid">
					<Link to="/" style={{ textDecoration: 'none' }}>		
						<h1 className="navbar-brand text-light fs-1">The Hacker News</h1>
					</Link>							    			    	
				</div>
			</nav>
			<div className=" py-4 search-bar">
				<SearchForm />
			</div>						
		</div>
	);
};

export default Header;