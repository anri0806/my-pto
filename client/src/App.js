import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";

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
      <NavBar />
      {currentUser ? (
        <MainPage />
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
