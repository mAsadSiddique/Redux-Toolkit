import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../ReducerSlices/Counter/counterSlice";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  //   console.log("Count", count);

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        {/* <button onClick={() => dispatch(reset())}>Reset</button> */}
      </div>
      <input
        type="number"
        placeholder="Amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>

        <button onClick={() => dispatch(resetAll)}>Reset All Amount</button>
      </div>
    </section>
  );
};

export default Counter;
