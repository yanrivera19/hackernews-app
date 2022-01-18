import React from 'react';
import Header from './Header';
import PopularNews from './PopularNews';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainNewsFeed from './MainNewsFeed';
import SelectedNews from './SelectedNews';
import SelectedTopNews from './SelectedTopNews';
import SearchedNews from './SearchedNews';

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<div className="container-fluid page-content">
					<div className="row">
						<Routes>
							<Route path={'/'} element={<MainNewsFeed/>}/>
							<Route path={'/search/:newsIndex'} element={<SearchedNews/>}/>
							<Route path={'/newsDetails/:newsIndex'} element={<SelectedNews/>}/>
							<Route path={'/topNewsDetails/:topNewsIndex'} element={<SelectedTopNews/>}/>
						</Routes>
						<PopularNews />
					</div>
				</div>
			</Router>
		</>
	);
};

export default App; 