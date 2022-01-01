import React from 'react';
import { Card } from 'react-bootstrap';
import Message from './Message';

const MessagesBoard = (props) => {
	const { messages } = props;

	return (
		<Card style={{ height: '55vh' }}>
			<Card.Title className="mx-auto mt-2">Messages</Card.Title>
			<Card.Body className="overflow-auto">
				{messages.map((message, index) => (
					<Message key={index} message={message} />
				))}
			</Card.Body>
		</Card>
	);
};
export default MessagesBoard;
