import React from "react";

function Conditional() {
  const age = 16;
  //   if (age >= 18) {
  //     return <p>You are elible for vote</p>;
  //   } else {
  //     return <div>You are not elible for vote</div>;
  //   }
  //   const getTheData = ('data')=>{
  //       switch('data'){
  //           case 'not loggedin':
  //               return 'Pleas Login';

  //               case ''
  //       }
  //   }
  return (
    <div>
      {/* {getTheData("data type")} */}
      {age >= 18 ? (
        <p>You are elible for vote</p>
      ) : (
        <p>You are not elible for vote</p>
      )}
    </div>
  );
}

export default Conditional;
