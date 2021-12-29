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
	connectedUsers.push(socket.handshake.query.name);
	io.emit('newUser', {
		newUserId: socket.id,
		newUserName: socket.handshake.query.name,
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

app.use('/users', usersRouter);

server.listen(port, () => {
	console.log(`server running on port ${port}`);
});

module.exports = { connectedUsers };
