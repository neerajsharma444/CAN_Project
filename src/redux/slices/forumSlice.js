import {createSlice} from '@reduxjs/toolkit';

const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    category: null,
    allCategories: [],
    questionData: null,
    globalState: null,
  },
  reducers: {
    categorySuccess: (state, action) => {
      state.category = action.payload;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.allCategories = action.payload;
    },
    fetchQuestionData: (state, action) => {
      state.questionData = action.payload;
    },
    globalState: (state, action) => {
      state.globalState = action.payload;
    },
  },
});

export const {
  categorySuccess,
  fetchCategoriesSuccess,
  fetchQuestionData,
  globalState,
} = forumSlice.actions;

export default forumSlice.reducer;
