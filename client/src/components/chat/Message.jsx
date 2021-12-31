import React from 'react';

const Message = (props) => {
	const { message } = props;

	return message.name && message.content ? (
		<div>
			{message.name}: {message.content}
		</div>
	) : (
		<div>{message}</div>
	);
};
export default Message;
