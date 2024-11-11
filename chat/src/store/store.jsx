import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './reducerAlert/alertSlice';
import userReducer from './reducerUser/userSlice';

const store = configureStore({
    reducer: {
        alert:alertReducer,
        user:userReducer
    }
});

export default store;