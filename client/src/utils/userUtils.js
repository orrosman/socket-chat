import axios from 'axios';

const BASE_URL = 'http://localhost:8080/users';

const login = async (name) => {
	const response = await axios.post(`${BASE_URL}/login`, {
		name: name,
	});
	return response.data.login;
};

export { login };
