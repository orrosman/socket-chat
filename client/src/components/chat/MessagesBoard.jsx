import React from 'react';
import { Card } from 'react-bootstrap';
import Message from './Message';

const MessagesBoard = (props) => {
	const { messages } = props;

	return (
		<Card>
			<Card.Body>
				<Card.Title>Messages</Card.Title>
				{messages.map((message, index) => (
					<Message key={index} message={message} />
				))}
			</Card.Body>
		</Card>
	);
};
export default MessagesBoard;
