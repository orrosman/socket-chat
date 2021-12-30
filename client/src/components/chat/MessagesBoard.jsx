import React from 'react';
import { Card } from 'react-bootstrap';

const MessagesBoard = (props) => {
	const { messages } = props;

	return (
		<Card>
			<Card.Body>
				<Card.Title>Messages</Card.Title>
				{messages.map((message, index) =>
					message.name && message.content ? (
						<div key={index}>
							{message.name}: {message.content}
						</div>
					) : (
						<div key={index}>{message}</div>
					)
				)}
			</Card.Body>
		</Card>
	);
};
export default MessagesBoard;
