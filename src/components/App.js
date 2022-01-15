import React from 'react';
import Header from './Header';
import PopularNews from './PopularNews';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainNewsFeed from './MainNewsFeed';
import SelectedMainNews from './SelectedMainNews';
import SelectedTopNews from './SelectedTopNews';

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<div className="container-fluid">
					<div className="row">
						<Routes>
							<Route key="home-page" path={'/'} element={<MainNewsFeed/>}/>
							{/* <Route key="search-page" path={'/:newsSearch'} element={<MainNewsFeed/>}/> */}
							<Route path={'/newsDetails/:newsTitle'} element={<SelectedMainNews/>}/>
							<Route path={'/topNewsDetails/:topNewsTitle'} element={<SelectedTopNews/>}/>
						</Routes>
						<PopularNews />
					</div>
				</div>
			</Router>
		</>
	)
}

export default App; 