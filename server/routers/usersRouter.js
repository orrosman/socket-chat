const express = require('express');
const router = express.Router();

const connectedUsers = require('../connectedUsers');

router.post('/login', (req, res) => {
	try {
		const { name } = req.body;

		if (!connectedUsers.includes(name)) {
			connectedUsers.push(name);

			res.send({ login: true });
		} else {
			res.send({ login: false });
		}
	} catch (error) {
		res.status(400).send({ error: 'Something is not right, try again' });
	}
});

module.exports = router;
