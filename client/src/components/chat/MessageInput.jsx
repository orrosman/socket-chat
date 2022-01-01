import React, { useState } from 'react';
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Notyf } from 'notyf';

const notyf = new Notyf({
	duration: 4000,
	dismissible: true,
});
const MessagesInput = (props) => {
	const { socket, name, users } = props;
	const [message, setMessage] = useState('');
	const [recipient, setRecipient] = useState('all-users');

	const handleSend = (e) => {
		e.preventDefault();
		if (message.trim() === '') {
			notyf.error(`Can't send an empty message`);
		} else {
			socket.current.emit('sendMessage', {
				content: message,
				name: name,
				sender: users[name],
				recipient: recipient,
			});
		}
	};

	const handleSelect = (recipientID) => {
		setRecipient(recipientID);
	};

	return (
		<div className="container mt-1 ">
			<DropdownButton
				id="recipients-dropdown"
				title="Choose recipient"
				variant="warning"
				className="mb-2"
				onSelect={handleSelect}
			>
				<Dropdown.Item eventKey={'all-users'}>Everybody</Dropdown.Item>

				<Dropdown.Divider />

				{Object.entries(users).map((user) => (
					<Dropdown.Item key={user[1]} eventKey={user[1]}>
						{user[0]}
					</Dropdown.Item>
				))}
			</DropdownButton>
			<Form onSubmit={handleSend}>
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
