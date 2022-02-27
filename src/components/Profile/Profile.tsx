import React from 'react'
import Posts from './Posts/Posts'
import s from './Profile.module.css'

const Profile = (props: any) => {
	return (
		<main>
			<div className={s.profile}>
				<div className={s.profile_photo}>
					<img src="https://source.unsplash.com/200x200/?people" alt="profile_photo" />
				</div>
				<div className={s.profile_info}>
					<h3 className={s.profile_name}>Dmitry Golub</h3>
					<p className={s.profile_birthdate}>Date of Birth: 13 february</p>
					<p className={s.profile_city}>City: Sevastopol</p>
					<p className={s.profile_education}>Education: SCPTE</p>
					<p className={s.profile_website}>Web Site: <a href="https://github.com/eniken-benaken">https://github.com/eniken-benaken</a></p>
				</div>
			</div>
			<Posts />
		</main>
	)
}

export default Profile

