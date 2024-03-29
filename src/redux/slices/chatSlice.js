import {createSlice} from '@reduxjs/toolkit';
import {getChatList, getRoomId} from './api';

const initialState = {
  chatList: [],
  roomId: null,
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatList: (state, action) => {
      state.chatList = action.payload;
    },
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setChatList, setRoomId, setLoading, setError} = chatSlice.actions;

export const fetchChatList =
  (roomId, userId, page, limit, token) => async dispatch => {
    dispatch(setLoading(true));
    try {
      const json = await getChatList(roomId, userId, page, limit, token);
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
    const json = await getRoomId(data, token);
    dispatch(setLoading(false));
    if (json.status) {
      dispatch(setRoomId(json.result._id));
    } else {
      dispatch(setError('Something went wrong!'));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
  }
};

export const selectChatList = state => state.chat.chatList;
export const selectRoomId = state => state.chat.roomId;
export const selectLoading = state => state.chat.loading;
export const selectError = state => state.chat.error;

export default chatSlice.reducer;
