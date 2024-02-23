import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../Redux/Features/Counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementByValue(5))}>increment 5</button>
      <div className="">
        <h1>{count}</h1>
      </div>
      <button onClick={() => dispatch(decrement())}>decrement</button>

      <button onClick={() => dispatch(decrementByValue(10))}>
        decrement 10
      </button>
    </div>
  );
};

export default Counter;
