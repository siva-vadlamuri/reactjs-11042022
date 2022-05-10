import React, { useReducer } from "react";

function UseReducerHook() {
  const reducer = (currentState, action) => {
    //   { type: "DECREMENT", payload: 5 }
    console.log(action);
    switch (action.type) {
      case "INCREMENT":
        return currentState + action.payload;
      case "DECREMENT":
        return currentState - action.payload;
      default:
        return currentState;
    }
    // Reducer is used to update the state based on action
    // And returns updated state
    // INCREMENT
    // DECREMENT
    // RESET
  };
  const [count, dispatch] = useReducer(reducer, 0);
  //   {
  // type:"INCREMENT",payload:5
  // }
  // count
  //  action_creators
  const incrementCount = (count) => {
    return { type: "INCREMENT", payload: count };
  };
  return (
    <div>
      <p className="mx-3">{count}</p>
      <div className="mt-3">
        <button
          onClick={() => {
            dispatch(incrementCount(5));
          }}
          className="btn btn-info ml-2"
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT", payload: 5 });
          }}
          className="btn btn-info ml-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default UseReducerHook;
