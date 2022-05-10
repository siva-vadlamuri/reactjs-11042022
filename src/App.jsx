import React from "react";
import PrimaryButton from "./components/Button/PrimaryButton";
import Conditional from "./components/Conditional/Conditional";
import ContactUs from "./components/ContactUs/ContactUs";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
// import Pagination from "./components/Pagination/Pagination";
import Users from "./components/Users/Users";
import Parent from "./hooks/context/Parent";
import UseEffectHook from "./hooks/effect/UseEffectHook";
import Pagination from "./hooks/pagination/Pagination";
import UseReducerHook from "./hooks/reducer/UseReducerHook";
import UseStateHook from "./hooks/state/UseStateHook";
import Routing from "./routing/Routing";

// When you  use context
// 1 We need to create the context
// 2 Provider which provides the data
// 3 Consumer Which consumes the Data

// Default export --> Only one time in A file and you need to use default beside export

// name export --> You export n no of things

export const UserContext = React.createContext();

const App = () => {
  const obj = {
    firstName: "Shiva",
  };

  return (
    <div>
      {/* <div>
        <p>I am a App component</p>
      </div>
      <div>
        <PrimaryButton text="Play store" />
        <PrimaryButton text="App store" />
        <PrimaryButton text="Amazon store" />
      </div> */}

      <Header />
      <Routing />
      {/* <Counter /> */}
      {/* <Pagination /> */}
      {/* <UserContext.Provider value={{ name: "shiva" }}>
        <Parent />
      </UserContext.Provider> */}
      {/* <UseReducerHook /> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <ContactUs /> */}
      {/* <Conditional /> */}
      {/* <Users /> */}
      {/* <Pagination /> */}
    </div>
  );
};

export default App;
