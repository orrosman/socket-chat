import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';
import { login } from '../utils/userUtils';

const Login = () => {
	let navigate = useNavigate();

	const [name, setName] = useState('');

	const handleLogin = async (e) => {
		e.preventDefault();
		const hasLoggedIn = await login(name);
		if (hasLoggedIn) {
			navigate('/chat', { state: { name: name } });
		} else {
			console.log('something is not right, try again');
		}
	};
	return (
		<Container className="d-flex flex-column text-center" style={{ height: '50vh' }}>
			<Form className="m-auto" onSubmit={handleLogin}>
			<div className="mb-4">
				<h5>Welcome!</h5>
				<p>Login below by choosing your display name in the chat.</p>
				<h6>Happy chatting!👍</h6>
			</div>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Display Name:</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>

				<Button onClick={handleLogin}>login</Button>
			</Form>
		</Container>
	);
};
export default Login;
