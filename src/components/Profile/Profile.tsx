import React from 'react'
import s from './Profile.module.css'

const Profile = (props: any) => {
	return (
		<main>
			<div className={s.profile}>
				<div className={s.profile__photo}>
					<img src="https://source.unsplash.com/200x200/?people" alt="profile__photo" />
				</div>
				<div className={s.profile__info}>
					<h3 className={s.profile__name}>Dmitry Golub</h3>
					<p className={s.profile__birthdate}>Date of Birth: 13 february</p>
					<p className={s.profile__city}>City: Sevastopol</p>
					<p className={s.profile__education}>Education: SCPTE</p>
					<p className={s.profile__website}>Web Site: <a href="https://github.com/eniken-benaken">https://github.com/eniken-benaken</a></p>
				</div>
			</div>
			<div className={s.posts}>
				<h3>My posts</h3>
				<div className={s.post__new}>
					<form action="#">
						<textarea name="post__new" id="post__new" cols={120} placeholder='Tell everyone about what you feel...'></textarea>
						<button type="submit">Send</button>
					</form>
				</div>
				<div className={s.post} id={`post2`}>
					<div className={s.post__avatar}>
						<img src="https://source.unsplash.com/50x50/?people" alt="post__avatar" />
					</div>
					<div className={s.post__message}>Is anyone here?</div>
				</div>
				<div className={s.post} id={`post1`}>
					<div className={s.post__avatar}>
						<img src="https://source.unsplash.com/50x50/?people" alt="post__avatar" />
					</div>
					<div className={s.post__message}>Hey everybody! This is my first post</div>
				</div>
			</div>
		</main>
	)
}

export default Profile

