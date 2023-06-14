import { Link } from "react-router-dom";

function NavBar({ currentUser }) {
  return (
    <div>
      <h2 style={{ textAlign: "left", margin: "0" }}>Logo</h2>
      {currentUser ? (
        <div style={{ float: "right" }}>
          <Link to="/home" style={{ paddingRight: "10px" }}>
            Home
          </Link>
          <Link to="/profile">
            Profile
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default NavBar;
