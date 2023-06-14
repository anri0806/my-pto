import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Signed up successfully! => ", formData);

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.username}
          onChange={handleFormData}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          value={formData.email}
          onChange={handleFormData}
          type="text"
          name="email"
          placeholder="Username"
        />
        <input
          value={formData.password}
          onChange={handleFormData}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Signup;
