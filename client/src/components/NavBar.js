import { Link } from "react-router-dom";

function NavBar({ currentUser }) {
  return (
    <div>
      <h2 style={{ textAlign: "left", margin: "0" }}>Logo</h2>
      {currentUser ? (
        <>
          <Link to="/profile" style={{ float: "right" }}>Profile</Link>
        </>
      ) : null}
    </div>
  );
}

export default NavBar;
