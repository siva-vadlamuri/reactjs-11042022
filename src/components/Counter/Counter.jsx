import React, { useState } from "react";

function Counter() {
  // Rules Of Hooks
  // 1 call the hooks at the top level
  // Dont call the hooks, condtionally, loops, and nested function
  // Call hooks only on functional components or custom react hooks
  const [count, setCount] = useState(0);
  // const getUsersData = () => {
  //   const [usersData, setUsersData] = useState([]);
  // };
  // if (true) {
  //   const [count, setCount] = useState(0);
  // }

  return (
    <div>
      <p>count:{count}</p>

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
    </div>
  );
}

export default Counter;
