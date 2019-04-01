import React from 'react';
import Message from "./Message";
import PostMessage from "./PostMessage";

const ChatRoom = ({ user, room }) => {
	const [messages, setMessages] = React.useState([]);

	React.useEffect(() => {
		const eventSource = new EventSource(`http://localhost:8080/messages?room=${room}`);
		eventSource.onmessage = e => {
			setMessages(old => {
				return [
					...old,
					JSON.parse(e.data)
				]
			})
		}
	}, []);

	return (
		<div className="chat-room">
			{
				messages.map(message => {
					return <Message key={message.id} message={message}/>
				})
			}
			<PostMessage room={room}/>
		</div>
	);
};

export default ChatRoom;
