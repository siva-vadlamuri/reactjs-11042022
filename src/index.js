import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

// Never touch the DOM
// There is two ways of creating component
// 1 : class based components (ES6)
// 2 : functional  components

// JSX --> JavaScript and XML
// XML --> We should have wrap all the elements in parent tag
// Every tag should have a closing tag

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
