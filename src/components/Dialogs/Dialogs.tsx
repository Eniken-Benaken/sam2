import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props: any) => {
	return (
		<main>
			<div className={s.dialogs_container}>
				<h3>Dialogs</h3>
				<Dialog dialog_avatar="https://source.unsplash.com/200x200/?people" dialog_name="Vladimir" dialog_current={false} />
				<Dialog dialog_avatar="https://source.unsplash.com/200x200/?people" dialog_name="Anastasia" dialog_current={false} />
				<Dialog dialog_avatar="https://source.unsplash.com/200x200/?people" dialog_name="Elena" dialog_current={false} />
				<Dialog dialog_avatar="https://source.unsplash.com/200x200/?people" dialog_name="Tatiana" dialog_current={false} />
				<Dialog dialog_avatar="https://source.unsplash.com/200x200/?people" dialog_name="Paul" dialog_current={true} />
				<Dialog dialog_avatar="https://source.unsplash.com/200x200/?people" dialog_name="Roman" dialog_current={false} />
			</div>
			<div className={s.splitter}></div>
			<div className={s.messages_container}>
				<h3>Messages</h3>
				<Message own={true} message="Hey bro It's me Dmitry" />
				<Message own={true} message="How are you?" />
				<Message own={false} message="Hello there! Thanks I'm fine!" />
				<Message own={false} message="And you?" />
				<Message own={true} message="Thanks! I'm fine too" />
				<Message own={false} message="See you next time" />
				<Message own={true} message="OK" />
				<form className={s.new_message}>
					<textarea name="post_new" id="post_new" placeholder='Type your message here'></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
		</main>
	)
}

export default Dialogs

