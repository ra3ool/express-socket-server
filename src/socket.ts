import { Server, Socket } from 'socket.io';

export default function registerChatHandlers(io: Server, socket: Socket) {
  socket.on('send_message', (msg) => {
    console.log('Message:', msg);

    // broadcast to all except sender
    socket.broadcast.emit('receive_message', {
      userId: socket.id,
      text: msg,
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
}
