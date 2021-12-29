import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const App = () => {
	const socketRef = useRef();

	useEffect(() => {
		socketRef.current = io('http://localhost:8080', {
			transports: ['websocket'],
		});
		socketRef.current.on('connect', () => {
			console.log(socketRef.current.id);
		});
	});

	return <div className="App text-center">put some content here</div>;
};
export default App;
