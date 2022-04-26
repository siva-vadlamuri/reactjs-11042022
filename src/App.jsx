import PrimaryButton from "./components/Button/PrimaryButton";
import Conditional from "./components/Conditional/Conditional";
import ContactUs from "./components/ContactUs/ContactUs";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import Users from "./components/Users/Users";

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
      {/* <ContactUs /> */}
      {/* <Conditional /> */}
      {/* <Users /> */}
      <Pagination />
    </div>
  );
};

export default App;
