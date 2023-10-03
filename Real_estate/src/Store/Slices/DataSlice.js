import {createSlice} from '@reduxjs/toolkit';

const dataSlice=createSlice({
    name:'data',
    initialState:{
       data:{}
    },
    reducers:{
        createData:(state,action)=>{
            state.data=action.payload;
            
        },
        deleteData:(state,action)=>{
           state.data={};
        },
    }
})

export default dataSlice.reducer;
export const {createData,deleteData}=dataSlice.actions;