import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Container, Row, Col } from 'react-bootstrap';
import MessagesBoard from './MessagesBoard';
import MessagesInput from './MessageInput';
import UsersList from './UsersList';
import UserMessage from './UserMessage';

const ChatRoom = () => {
	const { state } = useLocation();
	const { name } = state;

	const [messages, setMessages] = useState([]);
	const [connectedUsers, setConnectedUsers] = useState({});

	const socketRef = useRef();

	const handleOpenSocket = () => {
		socketRef.current = io('http://localhost:8080', {
			transports: ['websocket'],
			query: { name: name },
		});

		socketRef.current.on('receiveMessage', (message) => {
			setMessages((prevMessages) => [...prevMessages, message]);
		});

		socketRef.current.on('newUser', (users, name) => {
			setConnectedUsers({ ...users });
			setMessages((prevMessages) => [
				...prevMessages,
				<UserMessage name={name} status={'new user'} />,
			]);
		});

		socketRef.current.on('userLeft', (users, name) => {
			setConnectedUsers({ ...users });
			setMessages((prevMessages) => [
				...prevMessages,
				<UserMessage name={name} status={'user left'} />,
			]);
		});
	};
	useEffect(() => {
		handleOpenSocket();
	}, []);

	return (
		<Container fluid>
			<Row className="p-3">
				<Col>
					<UsersList users={connectedUsers} />
				</Col>
				<Col md={8}>
					<MessagesBoard messages={messages} />
					<MessagesInput socket={socketRef} name={name} />
				</Col>
			</Row>
		</Container>
	);
};
export default ChatRoom;
