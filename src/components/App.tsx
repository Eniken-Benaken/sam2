import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';

function App() {
	return (
		<div className="app">
			<Header />
			<Profile />
			<Navbar />
		</div>
	);
}

export default App;
