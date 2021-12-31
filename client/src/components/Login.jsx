import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
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
		<div className="App text-center">
			<Form onSubmit={handleLogin}>
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
		</div>
	);
};
export default Login;
