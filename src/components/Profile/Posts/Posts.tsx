import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props: any) => {
	return (
		<div className={s.posts}>
			<h3>My posts</h3>
			<div className={s.post_new}>
				<form action="#">
					<textarea name="post_new" id="post_new" cols={120} placeholder='Tell everyone about what you feel...'></textarea>
					<button type="submit">Post</button>
				</form>
			</div>
			<Post post_id={2} post_avatar="https://source.unsplash.com/50x50/?people" post_message="Is anyone here?" />
			<Post post_id={1} post_avatar="https://source.unsplash.com/50x50/?people" post_message="Hey everybody! This is my first post" />
		</div>
	)
}

export default Posts
