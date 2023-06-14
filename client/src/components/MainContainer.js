import MainPage from "./MainPage";
import Profile from "./Profile";

import { Routes, Route } from "react-router-dom";

function MainContainer({ currentUser }) {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<MainPage currentUser={currentUser} />} />
        <Route
          path="/profile"
          element={<Profile currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}

export default MainContainer;
