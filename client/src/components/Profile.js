function Profile({ currentUser }) {
  return (
    <div>
      <h1>{currentUser.username}</h1>
      <p>Employer:</p>
      <p>Start Date:</p>
      <p>Total Work Time:</p>
      <p>Start Vacation Accrued:</p>
    </div>
  );
}

export default Profile;
