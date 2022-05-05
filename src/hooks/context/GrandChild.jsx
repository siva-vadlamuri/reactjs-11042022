import React, { useContext } from "react";
import { UserContext } from "../../App";

function GrandChild() {
  const userData = useContext(UserContext);
  return <div>GrandChild {userData.name}</div>;
}

export default GrandChild;
