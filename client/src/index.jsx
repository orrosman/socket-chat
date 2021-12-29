import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ChatRoom from './components/chat/ChatRoom';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/chat" element={<ChatRoom />} />
			</Routes>
		</BrowserRouter>
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);
