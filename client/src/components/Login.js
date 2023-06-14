import { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = { username: "Anri", password: "test123123" };

  function handleSubmit(e) {
    e.preventDefault();

    if (username === login.username && password === login.password) {
      const user = {
        username: username,
        password: password,
      };

      onLogin(user);
      
    } else {
      console.log("wrong info");
    }

    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <br />
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
      <br />
      <p>
        Don't have an account? <Link to="signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
