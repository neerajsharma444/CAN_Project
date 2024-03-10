import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    allStates: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    fetchStatesSuccess: (state, action) => {
      state.allStates = action.payload;
    },
    logoutUser: state => {
      state.user = null;
    },
  },
});

export const {loginSuccess, fetchStatesSuccess, logoutUser} = authSlice.actions;

export default authSlice.reducer;
