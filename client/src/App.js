import Login from "./components/Login";
import Signup from "./components/Signup";

// import { Router, Route } from "react-router-dom";
import "./App.css";

//START from here add route hook

function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
    </div>
  );
}

export default App;
