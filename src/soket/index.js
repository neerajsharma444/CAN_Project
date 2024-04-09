import {chatService} from '@redux/services/chatService';
import {
  setLoading,
  setError,
  setChatList,
  setRoomId,
} from '@redux/slices/chatSlice';
import {joinRoom} from '@utils/Socket';

export const fetchChatList =
  (roomId, userId, page, limit, token) => async dispatch => {
    dispatch(setLoading(true));
    try {
      const json = await chatService.api.getChatList({
        roomId: '64b12a361cbf24a36ac3037c',
        page,
        limit,
        token,
      });
      dispatch(setLoading(false));
      if (json.status) {
        dispatch(setChatList(json.result.docs));
        dispatch(setRoomId(json.result._id));
      } else {
        dispatch(setError('Something went wrong!'));
      }
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
    }
  };

export const createRoomId = (data, token) => async dispatch => {
  dispatch(setLoading(true));
  try {
    const json = await chatService.api.createChat(data);
    dispatch(setLoading(false));
    if (json.status) {
      dispatch(setRoomId(json.result._id));
      joinRoom({_id: json.result._id}); // Join room after creation
    } else {
      dispatch(setError('Something went wrong!'));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
  }
};
