import {createSlice} from '@reduxjs/toolkit';

const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    category: null,
    allCategories: [],
  },
  reducers: {
    categorySuccess: (state, action) => {
      state.category = action.payload;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.allCategories = action.payload;
    },
  },
});

export const {categorySuccess, fetchCategoriesSuccess} = forumSlice.actions;

export default forumSlice.reducer;
