import PrimaryButton from "./components/Button/PrimaryButton";
import Conditional from "./components/Conditional/Conditional";
import ContactUs from "./components/ContactUs/ContactUs";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
// import Pagination from "./components/Pagination/Pagination";
import Users from "./components/Users/Users";
import UseEffectHook from "./hooks/effect/UseEffectHook";
import Pagination from "./hooks/pagination/Pagination";
import UseStateHook from "./hooks/state/UseStateHook";

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
      {/* <Counter /> */}
      <Pagination />
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
