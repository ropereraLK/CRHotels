import { createSlice } from '@reduxjs/toolkit';
 

const initialState = {
  isLoggedIn: false, 
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logOut: (state) => {
      state.isLoggedIn = false; 
      state.username = '';
    },
    // setUsername: (state, action) =>{
      
    // },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;