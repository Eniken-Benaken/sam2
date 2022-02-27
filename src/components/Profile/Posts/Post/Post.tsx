import React from 'react'
import s from './Post.module.css'

const Post = (props: any) => {
	return (
		<div className={s.post} id={`post${props.post_id}`}>
			<div className={s.post_avatar}>
				<img src={props.post_avatar} alt="post_avatar" />
			</div>
			<div className={s.post_message}>{props.post_message}</div>
		</div>
	)
}

export default Post