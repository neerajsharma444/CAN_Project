import {createSlice} from '@reduxjs/toolkit';

const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    category: null,
    allCategories: [],
    questionData: null,
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
  },
});

export const {categorySuccess, fetchCategoriesSuccess, fetchQuestionData} =
  forumSlice.actions;

export default forumSlice.reducer;
