import "./App.css";
import Nav from "./components/nav/Nav";
import Content from "./components/content/content"
import { useEffect, useState } from "react";
import GetRequest from "./components/request/get_request";

// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


function App() {
  const [auth, setauth] = useState({
    status:-1
  });
  useEffect(() => {
    GetRequest("test/",setauth,"",true);
  }, []);
  document.getElementById("App-container").style.width =
    String(parseInt(window.screen.width) - 80) + "px";
  if(auth.status==="1"){
    return <h2>You are not autherized to view this page!</h2>
  }
  return (
    <div id="grid">
      <div id="navbar"><Nav/></div>
      <div id="content"><Content/></div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
