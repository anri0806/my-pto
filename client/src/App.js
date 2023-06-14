import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function handleLogin(user) {
    setCurrentUser(user);
  }

  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
      {currentUser ? (
        <MainContainer currentUser={currentUser} />
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
