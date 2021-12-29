const express = require('express');
const app = express();
const cors = require('cors');

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 8080;

app.use(cors());

io.on('connection', (socket) => {
	console.log('a user connected id: ' + socket.id);

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

app.get('/', (req, res) => {
	res.send('server is working!👍');
});

server.listen(port, () => {
	console.log(`server running on port ${port}`);
});
