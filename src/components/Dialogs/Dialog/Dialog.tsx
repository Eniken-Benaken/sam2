import React from 'react'
import s from './Dialog.module.css'

const Dialog = (props: any) => {
	return (
		<div className={`${s.dialog} ${props.dialog_current && s.dialog_current}`}>
			<div className={s.dialog_avatar}>
				<img src={props.dialog_avatar} alt="dialog_avatar" />
			</div>
			<div className={s.dialog_name}>{props.dialog_name}</div>
		</div>
	)
}

export default Dialog
