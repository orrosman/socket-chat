import React from 'react';
import { Card } from 'react-bootstrap';

const MessagesBoard = (props) => {
	const { messages } = props;

	return (
		<Card>
			<Card.Body>
				<Card.Title>Messages</Card.Title>
				{messages.map((message, index) => (
					<div key={index}>
						{message.name}: {message.content}
					</div>
				))}
			</Card.Body>
		</Card>
	);
};
export default MessagesBoard;
