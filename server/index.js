const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('client connected', socket.id);

  // Example: respond to "ping" with "pong"
  socket.on('ping', (payload) => {
    console.log('ping received', payload);
    socket.emit('pong', { time: Date.now(), received: payload });
  });

  // Broadcast demo: echo back to sender and broadcast to others
  socket.on('chat:message', (msg) => {
    // ack to sender
    socket.emit('chat:ack', { status: 'ok' });
    // broadcast to everyone else
    socket.broadcast.emit('chat:message', msg);
  });

  socket.on('disconnect', (reason) => {
    console.log('client disconnected', socket.id, reason);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Socket.io server listening on ${PORT}`);
});
