import React, { useState, useEffect } from "react";

// state --> useState
// react side effects --> useEffect
const UseEffectHook = () => {
  const [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsersData(data);
  };

  //   componentDidMount,componentDidUpdate, componentWillUnMount

  //   useEffect will take two arguments
  // 1 call back fn:
  // 2 depedency Array

  // If you are not passing the dependency array, The useEffect will be called when the state is updated

  //   if you pass the dependency array as an empty array, the useEffect will  be called for the first time when the component is mounted on the DOM

  //   componentDidMount
  useEffect(() => {
    getUsersData();
    console.log("componentDidMount");
  }, []);

  //   when componentDidUpdate will be called?
  // when the state or props is changed (updating phase will occur)
  // in the updating phase if you want make a side effect

  return (
    <div></div>
    // <div>
    //   <table className="table table-striped">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Name</th>
    //         <th>Username</th>
    //         <th>city</th>
    //         <th>phone</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {/* [tr,tr] */}

    //       {usersData.length ? (
    //         usersData.map((user) => (
    //           <tr key={user.id}>
    //             <td>{user.id}</td>
    //             <td>{user.name}</td>
    //             <td>{user.username}</td>
    //             <td>{user.address.city}</td>
    //             <td>{user.phone}</td>
    //           </tr>
    //         ))
    //       ) : (
    //         <p>loading...</p>
    //       )}
    //     </tbody>
    //   </table>
    // </div>
  );
};
export default UseEffectHook;
