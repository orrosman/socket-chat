import React from 'react';
import { Badge } from 'react-bootstrap';

const UserMessage = (props) => {
	const { name, status } = props;
	return status === 'new user' ? (
		<Badge pill bg="info" text="dark">
			{name} has entered the chat
		</Badge>
	) : (
		<Badge pill bg="info" text="dark">
			{name} has left the chat
		</Badge>
	);
};
export default UserMessage;
