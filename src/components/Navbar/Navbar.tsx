import React from 'react'
import s from './Navbar.module.css'

const Navbar = (props: any) => {
	return (
		<aside className={s.navbar}>
			<div className={`${s.navbar_item} ${s.navbar_item_active}`}>Profile</div>
			<div className={s.navbar_item}>Messages</div>
			<div className={s.navbar_item}>News</div>
			<div className={s.navbar_item}>Music</div>
			<div className={s.navbar_item}>Settings</div>
		</aside>
	)
}

export default Navbar

