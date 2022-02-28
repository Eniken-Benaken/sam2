import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './Dialogs/Dialogs';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';

function App() {
	return (
		<div className="app">
			<Header />
			<main>
			<Routes>
				<Route path="" element={<Profile />} />
				<Route path="profile" element={<Profile />} />
				<Route path="mail"  element={<Dialogs />} />
			</Routes>
			</main>
			<Navbar />
		</div>
	);
}

export default App;
