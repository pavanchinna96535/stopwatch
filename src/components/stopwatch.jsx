import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimer,reset } from "../redux/timerSlice";



function Timer(){

    const timer=useSelector((state)=>state.timer);
    
    const dispatch=useDispatch();
    const intervalRef=useRef(null);

   const handleTimer=()=>{
   
        intervalRef.current=setInterval(()=>{
            dispatch(startTimer());
        },1000)
    }
    const handleStop=()=>{
        clearInterval(intervalRef.current);
    }
    const handleReset=()=>{
        handleStop();
        dispatch(reset());
    }

    function stopwatch(val){
        const sval=val%60;
        const seconds=`0${sval}`.slice(-2);
        const mval=Math.floor(val/60);
        const minutes=`0${mval%60}`.slice(-2);
        const hval=Math.floor(minutes/60);
        const hour=`0${hval}`.slice(-2);
        return `${hour}:${minutes}:${seconds}`;
    }
    

   useEffect(()=>{
    return ()=>clearInterval(intervalRef.current);
   },[])

    
    return <div>
        <h1>{stopwatch(timer)}</h1>
        <button onClick={handleTimer}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
}
export default Timer;