const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
	res.send('server is working!👍');
});

app.listen(port, () => {
	console.log(`server running on port ${port}`);
});
