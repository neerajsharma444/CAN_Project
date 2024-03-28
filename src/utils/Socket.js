import io from 'socket.io-client';
import {API_ENDPOINTS} from '../redux/apiEndpoints/endPoints';
import SOCKET from '../constants/socket';

let socket = null;
let isConnected = false;

const socketInit = userId => {
  if (!socket) {
    socket = io.connect(API_ENDPOINTS.SOCKET_CHAT, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    socket.on(SOCKET.CONNECT, res => {
      isConnected = socket.connected;
      console.log('socket connected', socket, res);
    });

    socket.on(SOCKET.DISCONNECT, res => {
      console.log('disconnect', res);
      isConnected = socket.connected;
    });

    socket.on(SOCKET.RECONNECT, e => {
      console.log('reconnect', socket, e);
      isConnected = socket.connected;
    });

    socket.on(SOCKET.NEW_MESSAGE_READ, sendMessageData => {
      console.log('new-message-read', sendMessageData);
      let data = [];
      let newMassage = sendMessageData;
      newMassage.text = sendMessageData.message;
      if (userId === sendMessageData.senderID) {
        newMassage.user = {_id: 1};
      } else {
        newMassage.user = {_id: 2};
      }
      data.push(newMassage);
    });
  }
};

const joinRoom = roomData => {
  socket.emit(SOCKET.JOIN, roomData);
};

const onSend = messageData => {
  console.log('messageData', messageData);
  socket.emit(SOCKET.NEW_MESSAGE, messageData);
};

const socketDisconnect = () => {
  socket.disconnect();
  socket = null;
  isConnected = false;
};

export {socketInit, joinRoom, onSend, socketDisconnect};
