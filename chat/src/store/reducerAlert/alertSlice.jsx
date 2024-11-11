import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
    name:'alert',
    initialState: {
        isActive:false,
        type:'',
        message:''
    },
    reducers: {
        showAlert:(state,action) => {
            state.isActive = true;
            state.type = action.payload.type;
            state.message = action.payload.message;
        },
        hideAlert:(state) => {
            state.isActive = false;
            state.type = '';
            state.message = '';
        }
    }
})

export const {showAlert, hideAlert} = alertSlice.actions;

export default alertSlice.reducer;