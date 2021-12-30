import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MessagesInput = (props) => {
	const { socket, name } = props;
	const [message, setMessage] = useState('');

	const handleSend = () => {
		socket.current.emit('sendMessage', { content: message, name: name });
	};

	return (
		<div className="container">
			<Form>
				<Form.Group className="mb-3" controlId="message-input">
					<Form.Control
						type="text"
						placeholder="Enter message"
						onChange={(e) => setMessage(e.target.value)}
					/>
				</Form.Group>

				<Button type="button" onClick={handleSend}>
					send
				</Button>
			</Form>
		</div>
	);
};
export default MessagesInput;
