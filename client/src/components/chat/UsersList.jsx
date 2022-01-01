import React from 'react';
import { Card } from 'react-bootstrap';

const UsersList = (props) => {
	const { users, name } = props;

	return (
		<Card style={{ height: '69vh' }}>
			<Card.Title className="mx-auto mt-2">Connected Users</Card.Title>
			<Card.Body>
				<ul>
					{Object.entries(users).map((user, index) => (
						<li key={index}>
							{console.log(user[0] === name)}
							{user[0] === name ? <strong>{user[0]} - You</strong> : user[0]}
						</li>
					))}
				</ul>
			</Card.Body>
		</Card>
	);
};
export default UsersList;
