import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";


function Counter(){
    const counterVal=useSelector((state)=>state.counter);
    const dispatch=useDispatch();
    const handleIncrememnt=()=>{
        dispatch(increment());
    }
    const handleDecrement=()=>{
        dispatch(decrement());
    }
    return <div>
        <h1>{counterVal}</h1>  
        <button onClick={handleIncrememnt}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
}
export default Counter;