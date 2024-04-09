import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Header from '@components/common/Header/Header';
import IMAGES from '@assets/images';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {useSelector, useDispatch} from 'react-redux';
import {socketInit, onSend} from '@utils/Socket';
import {
  useLazyGetChatListQuery,
  useCreateChatMutation,
} from '@redux/services/chatService';
import styles from './Chat.Styles';
import {setMessages, setLoading} from '@redux/slices/chatSlice';

const Chat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const userId = useSelector(state => state.auth?.user?.result?._id);
  console.log('USER ID: ', userId);
  const messages = useSelector(state => state.chat.messages);
  const dispatch = useDispatch();
  const [createChatMutation] = useCreateChatMutation();
  const [data] = useLazyGetChatListQuery();

  useEffect(() => {
    socketInit(userId);
    const fetchChatList = async () => {
      try {
        dispatch(setLoading(true));
        const response = await data();
        if (
          response &&
          response.data.result &&
          response.data.result.length > 0
        ) {
          const formattedMessages = response.data.result.map(
            (message, index) => ({
              _id: `${message._id}_${Date.now()}_${index}`,
              text: message.message.trim(),
              createdAt: new Date(message.createdAt),
              user: {_id: message.senderID},
            }),
          );
          dispatch(setMessages(formattedMessages));
          console.log('FORMATTED MESSAGES===> ', formattedMessages);
          setIsLoading(false);
        }
      } catch (error) {
        console.log('Error fetching chat:', error);
        setIsLoading(false);
      } finally {
        dispatch(setLoading(false));
        setIsLoading(false);
      }
    };
    fetchChatList();
  }, []);

  const onSendMessage = async newMessages => {
    try {
      const messageData = {
        roomId: '64b12a361cbf24a36ac3037c',
        senderID: userId,
        receiverId: '63b3dfde551232a1bb5420d7',
        message: newMessages[0].text.trim(),
      };
      onSend(messageData);
      await createChatMutation({body: messageData});
      // Update the chat messages state with the new message
      dispatch(setMessages(GiftedChat.append(messages, newMessages)));
    } catch (error) {
      console.log('Error sending message:', error);
    }
  };

  const renderBubble = props => (
    <Bubble
      {...props}
      wrapperStyle={{
        left: styles.wrapperStyle.left,
        right: styles.wrapperStyle.right,
      }}
    />
  );

  const renderSend = props => (
    <TouchableOpacity
      onPress={() => props.onSend({text: props.text.trim()}, true)}
      style={styles.sendBtn}>
      <Image source={IMAGES.send} style={styles.sendIcon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <Header renderText="CAN Admin" renderImage={false} />
      <View style={styles.content}>
        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <GiftedChat
            messages={messages}
            onSend={onSendMessage}
            user={{_id: userId}}
            renderBubble={renderBubble}
            renderSend={renderSend}
            textInputStyle={styles.txtInput}
            multiline={true}
          />
        )}
      </View>
    </View>
  );
};

export default Chat;
