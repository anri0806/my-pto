import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";

import "./App.css";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  function handleLogin(user) {
    setCurrentUser(user);

    navigate("/home");
  }

  function handleLogout() {
    setCurrentUser(null);

    console.log("logged out")
    // Check here!
    // navigate("/");
    window.location.href = "/";
  }

  
  return (
    <div className="App">
      <NavBar currentUser={currentUser} onLogout={handleLogout} />
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
