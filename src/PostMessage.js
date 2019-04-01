import React from 'react';

const PostMessage = ({ room }) => {
	const [user, setUser]       = React.useState('');
	const [message, setMessage] = React.useState('');

	const onUserChange = (e) => {
		setUser(e.target.value);
	};

	const onMessageChange = (e) => {
		setMessage(e.target.value);
	};

	const sendMessage = () => {
		fetch('http://localhost:8080/messages', {
			method  : 'POST',
			headers : {
				'Content-Type' : 'application/json',
			},
			body    : JSON.stringify({
				text : message,
				user : user,
				room
			})
		})
			.then(function (data) {
				console.log('Request success: ', data);
				setUser('');
				setMessage('');
			})
			.catch(function (error) {
				console.log('Request failure: ', error);
			});
	};

	return (
		<div className="post-message">
			<label>Who are you?</label>
			<input type={'text'} value={user} onChange={onUserChange}/>
			<input type={'text'} value={message} onChange={onMessageChange}/>
			<button onClick={sendMessage}>Send message</button>
		</div>
	);
};

export default PostMessage;
