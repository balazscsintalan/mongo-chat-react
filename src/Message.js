import React from 'react';
import {formatDate} from "./formatDate";

const Message = ({ message }) => {
	const { text, user, timestamp } = message;
	return (
		<div>{`${formatDate(timestamp)} ${user} - ${text}`}</div>
	);
};

export default Message;
