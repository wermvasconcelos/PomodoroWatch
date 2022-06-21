import "./App.css";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Cadastro from "./Components/cadastro/index";
import Login from "./Components/login/index";
import Img from "./static/img/unifametro.jpg";
import Routes from "./Components/routes/index";
import { useState } from "react";

function App() {
  const [Theme, setTheme] = useState(
    localStorage.getItem("theme") !== ""
      ? localStorage.getItem("theme") == "dark"
        ? "dark"
        : "light"
      : ""
  );
  const [Token, setToken] = useState(
    localStorage.getItem("jwt") !== "" ? localStorage.getItem("jwt") : "" //setItem = ""
  );

  return (
    <div className="">
      <ReactNotification />
      <Routes
        token={Token}
        setToken={setToken}
        Theme={Theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default App;
