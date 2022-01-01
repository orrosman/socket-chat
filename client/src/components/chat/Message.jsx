import React from 'react';

const Message = (props) => {
	const { message } = props;

	return message.name && message.content ? (
		<div className="message">
			<strong>{message.name}</strong>: {message.content}
		</div>
	) : (
		<div className="d-flex">{message}</div>
	);
};
export default Message;
