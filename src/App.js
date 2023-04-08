import "./App.css";
import BootLoader from "./Components/Bootstrap";
import React, {useState} from "react";
import {LoginSuccessProvider} from "./Contexts/LoginContext";


function App() {
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("token")));
  return (
    <div className="App">
      <LoginSuccessProvider value={[isLogin, setIsLogin]}>
      <BootLoader/>
        < /LoginSuccessProvider >
    </div>
  );
}

export default App;
