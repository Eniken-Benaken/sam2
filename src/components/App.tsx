import React from 'react';
import './App.css';
import Dialogs from './Dialogs/Dialogs';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';

function App() {
	return (
		<div className="app">
			<Header />
			{/* <Profile /> */}
			<Dialogs />
			<Navbar />
		</div>
	);
}

export default App;
