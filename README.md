# Socket Chat

---

In this project I made a live chat website using [socket.io](https://socket.io/)

<img src="client\src\assets\demo.png">

## Features

---

- Notify all users when another user join/leave the chat
- Send public messages (to all users) or private messages (to a specific user)
- Only unique names (no duplicates)
- Used Docker Containers for chat server & client

## Usage

---

### Online:

Go to [my chat website](https://or-socket-chat.herokuapp.com/) and start chatting!

### Locally:

(Requires Docker)

- In the root directory run `docker-compose up`
- Go to `http://localHost:3000`
- To close the container run `docker-compose down`

## Build with:

- [⚛ React](https://reactjs.org/)
  - [🏗⚛ Create React App](https://github.com/facebook/create-react-app)
- [👢Bootstrap](https://getbootstrap.com/)
- [🔌socket.io](https://socket.io/)
- [🐳Docker](https://www.docker.com/)
- [📨Notyf](https://github.com/caroso1222/notyf)
