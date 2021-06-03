import "./App.css";
import Nav from "./components/nav/Nav";
import Content from "./components/content/content"
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


function App() {
  document.getElementById("App-container").style.width =
    String(parseInt(window.screen.width) - 80) + "px";
  return (
    <div id="grid">
      <div id="navbar"><Nav/></div>
      <div id="content"><Content/></div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
