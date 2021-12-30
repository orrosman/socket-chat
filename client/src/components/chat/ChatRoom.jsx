import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Container, Row, Col } from 'react-bootstrap';
import MessagesBoard from './MessagesBoard';
import MessagesInput from './MessageInput';

const ChatRoom = () => {
	const { state } = useLocation();
	const { name } = state;

	const [messages, setMessages] = useState([]);

	const socketRef = useRef();

	const handleOpenSocket = () => {
		socketRef.current = io('http://localhost:8080', {
			transports: ['websocket'],
			query: { name: name },
		});

		socketRef.current.on('connect', () => {
			console.log(socketRef.current.id);
		});

		socketRef.current.on('receiveMessage', (message) => {
			setMessages((prevMessages) => [...prevMessages, message]);
		});

		socketRef.current.on('newUser', (msg) => {
			console.log(`new user name: ${msg.newUserName}`);
		});
	};
	useEffect(() => {
		handleOpenSocket();
	}, []);

	return (
		<Container fluid>
			<Row className="p-3">
				<Col>Connected users list here</Col>
				<Col md={8}>
					<MessagesBoard messages={messages} />
					<MessagesInput socket={socketRef} name={name} />
				</Col>
			</Row>
		</Container>
	);
};
export default ChatRoom;
