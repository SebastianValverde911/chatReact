import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'user',
    initialState: {
        data:{},
        isActive: false
    },
    reducers: {
        userActive:(state,action) => {
            state.data = action.payload.data
            state.isActive = true;
        },
        userDisconnect:(state) => {
            state.data = {};
            state.isActive = false;
        }
    }
})

export const {userActive, userDisconnect} = userSlice.actions;

export default userSlice.reducer;