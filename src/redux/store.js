import {configureStore} from "@reduxjs/toolkit"
import TimerReducer from "./timerSlice.js"
import CounterReducer from "./counterSlice.js"

const store=configureStore({
    reducer:{
        timer:TimerReducer,
        counter:CounterReducer,
    }
})

export default store; 