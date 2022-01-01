import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
	return (
		<nav className="navbar navbar-dark bg-dark pb-0">
			<i className="navbar-brand mx-auto text-center">
				<img src={logo} width="100" height="100" alt="example logo"></img>
				<div>Socket Chat</div>
			</i>
		</nav>
	);
};

export default Header;
