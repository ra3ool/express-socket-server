import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { registerChatHandlers } from './socket';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  registerChatHandlers(io, socket);
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
