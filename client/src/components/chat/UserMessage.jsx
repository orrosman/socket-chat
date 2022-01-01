import React from 'react';
import { Badge } from 'react-bootstrap';

const UserMessage = (props) => {
	const { name, status } = props;
	return (
		<Badge pill bg="info" text="dark" className="mx-auto mt-2">
			{name}{' '}
			{status === 'new user' ? 'has entered the chat' : 'has left the chat'}
		</Badge>
	);
};
export default UserMessage;
