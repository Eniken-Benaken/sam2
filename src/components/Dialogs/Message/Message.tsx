import React from 'react'
import s from './Message.module.css'

const Message = (props: any) => {
	return (
		<div className={`${s.message} ${props.own && s.own}`}>{props.message}</div>
	)
}

export default Message
