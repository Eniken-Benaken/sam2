import React from 'react'
import logo from '../../logo.svg'
import s from './Header.module.css'

const Header = (props: any) => {
	return (
		<header className={s.header}>
				<img className={s.header__img} src={logo} alt="logo" />
				<div className={s.header__text}>React.Net</div>
		</header>
	)
}

export default Header;