import React from 'react';
import './App.css';
import Header from './Header/Header';

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				{/* <div className="banner">
					<img src="https://source.unsplash.com/900x300/?beach" alt="banner" />
				</div> */}
				<div className="profile">
					<div className="profile__photo">
					</div>
					<div className="profile__info">
						<h3 className="profile__name">Dmitry Golub</h3>
						<p className="profile__birthdate">Date of Birth: 13 february</p>
						<p className="profile__city">City: Sevastopol</p>
						<p className="profile__education">Education: SCPTE</p>
						<p className="profile__website">Web Site: <a href="https://github.com/eniken-benaken">https://github.com/eniken-benaken</a></p>
					</div>
				</div>
				<div className="posts">
					<h3>My posts</h3>
					<div className="post__new">
						<form action="#">
							<textarea name="post__new" id="post__new" cols={120} placeholder='Tell everyone about what you feel...'></textarea>
							<button type="submit">Send</button>
						</form>
					</div>
					<div className="post" id={`post2`}>
						<div className="post__avatar">
							<img src="https://source.unsplash.com/50x50/?people" alt="post__avatar" />
						</div>
						<div className="post__message">Is anyone here?</div>
					</div>
					<div className="post" id={`post1`}>
						<div className="post__avatar">
							<img src="https://source.unsplash.com/50x50/?people" alt="post__avatar" />
						</div>
						<div className="post__message">Hey everybody! This is my first post</div>
					</div>
				</div>
			</main>
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
