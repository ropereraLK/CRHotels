import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice'; 

const store = configureStore({
  reducer: { 
    users: userReducer,
    auth: authReducer,

  },
});

export default store;