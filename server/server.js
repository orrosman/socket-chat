const express = require('express');
const app = express();
const cors = require('cors');

const usersRouter = require('./routers/usersRouter');

const connectedUsers = require('./connectedUsers');

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 8080;

app.use(cors());
app.use(express.json());

io.on('connection', (socket) => {
	connectedUsers[socket.handshake.query.name] = socket.id;

	io.emit('newUser', connectedUsers, socket.handshake.query.name);

	socket.on('sendMessage', (message) => {
		message.recipient === 'all-users'
			? io.emit('receiveMessage', message)
			: io
					.to([message.recipient, message.sender])
					.emit('receiveMessage', message);
	});

	socket.on('disconnect', () => {
		delete connectedUsers[socket.handshake.query.name];
		io.emit('userLeft', connectedUsers, socket.handshake.query.name);
	});
});

app.use('/users', usersRouter);

server.listen(port, () => {
	console.log(`server running on port ${port}`);
});
