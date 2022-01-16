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
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid" id="content">
					<Link to="/">		
						<h2 className="navbar-brand" href="#">The Hacker News</h2>
					</Link>							    
			    	<div>
				    	<button className="btn-sm btn-outline-dark" type="button" onClick={handleClick} data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
				    		<span className="fas fa-search"></span>
				    	</button>
				    </div>				    	
				</div>
			</nav>
			<nav className={`${!isClicked ? "active" : 'second-nav'} navbar navbar-expand-lg navbar-light bg-light`} id="searchBar">
				<div className="px-5 search-bar">
				    <SearchForm />
				</div>
			</nav>		
		</>
	);
};

export default Header;