import type { Server, Socket } from 'socket.io';

export function registerChatHandlers(io: Server, socket: Socket) {
  socket.on('send_message', (msg) => {
    // Broadcast the message to all other connected clients
    // Note: For a real chat app, you would use socket.to('roomName').emit()
    io.emit('receive_message', { ...msg, user: 'system' });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
}
