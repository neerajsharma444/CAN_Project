import React, {useState, useEffect, useCallback} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Header from '@components/common/Header/Header';
import IMAGES from '@assets/images';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import styles from './Chat.Styles';
import {socketInit} from '@utils/Socket';
import {useSelector} from 'react-redux';
import SOCKET from '@constants/socket';
// const [data] = useLazyCreateChatQuery;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const id = useSelector(state => state.auth?.user?.result?._id);
  // console.log('ID RESPONSE', id);

  useEffect(() => {
    socketInit(id);

    const data = {
      senderId: SOCKET.RECEIVER_ID,
      receiverId: id,
    };
    setMessages([
      {
        _id: 1,
        text: 'Hey there dev!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  // const onSend = useCallback((sendMessageData = []) => {
  //   let messageData = {
  //     roomId: roomId,
  //     senderID: userData._id,
  //     receiverID: SOCKET_CONST.RECEIVER_ID,
  //     message: sendMessageData[0].text,
  //   };
  //   sendMessageData[0].createdAt = new Date().toJSON();
  //   Socket.onSend(messageData);
  //   setTimeout(() => {
  //     giftedChatRef.current.scrollToBottom();
  //   }, 500);
  // }, []);

  const renderBubble = props => {
    return <Bubble {...props} wrapperStyle={styles.wrapperStyle} />;
  };

  const renderSend = props => {
    return (
      <TouchableOpacity
        onPress={() => props.onSend({text: props.text.trim()}, true)}
        style={styles.sendBtn}>
        <Image source={IMAGES.send} style={styles.sendIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header text="CAN Admin" image={false} />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        textInputStyle={styles.txtInput}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
      />
    </View>
  );
};

export default Chat;
