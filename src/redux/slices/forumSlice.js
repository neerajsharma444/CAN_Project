import {createSlice} from '@reduxjs/toolkit';

const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    category: null,
  },
  reducers: {
    categorySuccess: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {categorySuccess} = forumSlice.actions;

export default forumSlice.reducer;
