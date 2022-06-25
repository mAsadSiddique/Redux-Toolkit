import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../ReducerSlices/Counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  //   console.log("Count", count);

  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default Counter;
