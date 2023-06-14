import MainPage from "./MainPage";
import Profile from "./Profile";

import { Routes, Route } from "react-router-dom";


function MainContainer({ currentUser }) {
  return (
    <div>
      <MainPage currentUser={currentUser} />
      <Profile />
    </div>
  );
}

export default MainContainer;
