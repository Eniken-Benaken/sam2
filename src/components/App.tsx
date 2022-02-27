import React from 'react';
import './App.css';
import Header from './Header/Header';
import Profile from './Profile/Profile';

function App() {
	return (
		<div className="app">
			<Header />
			<Profile />
			<aside className="navbar">
				<div className="navbar__item">Profile</div>
				<div className="navbar__item">Messages</div>
				<div className="navbar__item">News</div>
				<div className="navbar__item">Music</div>
				<div className="navbar__item">Settings</div>
			</aside>
		</div>
	);
}

export default App;
