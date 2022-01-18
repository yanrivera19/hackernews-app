import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SearchForm from './SearchForm';

const Header = () => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(prev => !prev)
	};

	console.log(isClicked)

	return (
		<div style={{paddingBottom: '20px'}}>
			<nav className="navbar navbar-expand-lg navbar-light" style={{paddingBottom: '40px'}}>
				<div id="content" className="container-fluid">
					<Link to="/" style={{ textDecoration: 'none' }}>		
						<h1 className="navbar-brand text-light fs-1">The Hacker News</h1>
					</Link>							    
			    	<div>
				    	<button className="btn-sm btn-outline-dark" type="button" onClick={handleClick}> 
				    		<i className="fas fa-search"></i>
				    	</button>
				    </div>				    	
				</div>
			</nav>
			<nav className={`${!isClicked ? "active" : 'second-nav'} navbar navbar-expand-lg navbar-light bg-light`} id="searchBar">
				<div className="px-5 search-bar">
				    <SearchForm />
				</div>
			</nav>		
		</div>
	);
};

export default Header;