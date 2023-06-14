import Profile from "./Profile";

function MainPage({ currentUser }) {
  return (
    <div style={{ marginTop: "10%" }}>
      <h1>Hello, {currentUser.username}!</h1>
      <p>Vacation available/ used: </p>
      <p>Holiday available/ used: </p>
      <p>Personal Day available/ used: </p>
      <p>Sick Day available/ used: </p>
    </div>
  );
}

export default MainPage;
