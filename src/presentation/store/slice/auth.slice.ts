import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {accessToken: ''},
};

//State slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.value.accessToken = '';
    },
  },
});

export const {setAccessToken} = authSlice.actions;

export default authSlice.reducer;
