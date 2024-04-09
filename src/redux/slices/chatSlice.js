import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  isLoading: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {setMessages, setLoading} = chatSlice.actions;

export default chatSlice.reducer;
