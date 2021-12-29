import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';

const App = () => {
	const { state } = useLocation();
	const { name } = state;
	const socketRef = useRef();

	const handleOpenSocket = () => {
		socketRef.current = io('http://localhost:8080', {
			transports: ['websocket'],
			query: { name: name },
		});

		socketRef.current.on('connect', () => {
			console.log(socketRef.current.id);
		});

		socketRef.current.on('newUser', (msg) => {
			console.log(`new user name: ${msg.newUserName}`);
		});
	};
	useEffect(() => {
		handleOpenSocket();
	});

	return <div className="App text-center">{name} chat room</div>;
};
export default App;
