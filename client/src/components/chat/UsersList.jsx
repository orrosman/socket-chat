import React from 'react';
import { Card } from 'react-bootstrap';

const UsersList = (props) => {
	const { users } = props;

	return (
		<Card>
			<Card.Body>
				<Card.Title>Connected Users</Card.Title>
				<ul>
					{Object.entries(users).map((user, index) => (
						<li key={index}>{user[0]}</li>
					))}
				</ul>
			</Card.Body>
		</Card>
	);
};
export default UsersList;
