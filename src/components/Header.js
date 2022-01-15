import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SearchForm from './SearchForm';

const Header = () => {

// 	const displaySearchBar= () => {
//   		let searchBar = document.querySelector("#searchBar");
// 
//   		if (searchBar.style.display === "none") {
//     		searchBar.style.display = "block";
//   		} else {
//     		searchBar.style.display = "none";
//   		}
// 	}

	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {

		setIsClicked(prev => !prev)
	};
// 
// 		if (!isClicked) {
// 			return setIsClicked(true)
// 		} 
// 		return setIsClicked(false);

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
	)
}

export default Header;