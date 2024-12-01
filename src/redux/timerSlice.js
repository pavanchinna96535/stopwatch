
import {createSlice} from "@reduxjs/toolkit"

const timerSlice=createSlice({
    name:"timer",
    initialState:0,
    reducers:{
        startTimer:(state)=>state+1,
            reset:(state)=>0,
    }
    
    
})
export default timerSlice.reducer;
export const {startTimer,reset}=timerSlice.actions;
