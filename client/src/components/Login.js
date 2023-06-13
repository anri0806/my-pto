import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [correctLogin, setCorrectLogin] = useState(false);

  const login = { username: "Anri", password: "123123" };

  function handleSubmit(e) {
    e.preventDefault();

    if (username === login.username && password === login.password) {
      setCorrectLogin(true);
      console.log("successfully logged in");
    } else {
      console.log("wrong info");
    }

    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <h1>My PTO</h1>
      <p>
        My PTO is a Paid Time Off tracker for managing your vacations and
        absences!
      </p>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
