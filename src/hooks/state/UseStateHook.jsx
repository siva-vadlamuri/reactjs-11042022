import React, { useEffect, useState } from "react";

const UseStateHook = () => {
  // Rules Of Hooks
  // 1 call the hooks at the top level
  // Dont call the hooks, condtionally, loops, and nested function
  // Call hooks only on functional components or custom react hooks
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  // const getUsersData = () => {
  //   const [usersData, setUsersData] = useState([]);
  // };
  // if (true) {
  //   const [count, setCount] = useState(0);
  // }
  // componentDidUpdate?
  useEffect(() => {
    console.log("use effect will be called when the component is mounted");
  }, [count]);

  //   dependency array

  return (
    <div>
      <p>count1:{count}</p>
      <p>count2:{countTwo}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn btn-info ml-2"
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="btn btn-info ml-2"
      >
        Decrement
      </button>

      <button
        onClick={() => {
          setCountTwo(countTwo + 1);
        }}
        className="btn btn-info"
      >
        Increment count2
      </button>
      <button
        onClick={() => {
          setCountTwo(countTwo - 1);
        }}
        className="btn btn-info"
      >
        Decrement count 2
      </button>
    </div>
  );
};
export default UseStateHook;
