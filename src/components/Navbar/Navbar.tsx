import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = (props: any) => {
	return (
		<aside className={s.navbar}>
			<div className={`${s.navbar_item} ${s.navbar_item_active}`}>
				<NavLink to="profile" className={({isActive}) => isActive ? s.active: ''} >Profile</NavLink>
			</div>
			<div className={s.navbar_item}>
				<NavLink to="mail" className={({isActive}) => isActive ? s.active: ''}>Messages</NavLink>
			</div>
			<div className={s.navbar_item}>
				<NavLink to="" className={({isActive}) => isActive ? s.active: ''}>News</NavLink>
			</div>
			<div className={s.navbar_item}>
				<NavLink to="" className={({isActive}) => isActive ? s.active: ''}>Music</NavLink>
			</div>
			<div className={s.navbar_item}>
				<NavLink to="" className={({isActive}) => isActive ? s.active: ''}>Settings</NavLink>
			</div>
		</aside>
	)
}

export default Navbar

