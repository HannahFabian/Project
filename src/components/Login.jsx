import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ users, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid username or password.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (users.find((user) => user.username === username)) {
      alert("Username already exists.");
    } else {
      const newUser = { username, password };
      users.push(newUser);
      alert("Registration successful! Please login.");
      setIsRegistering(false); // Regresar al login después del registro
    }
  };

  return (
    <div className="wrapper">
  {/* Formulario de Login */}
  {!isRegistering && (
    <div className="form-box login">
      <form onSubmit={handleLogin}>
        <h1 className = "title">Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="button-style" type="submit">
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={() => setIsRegistering(true)}>
              Register here
            </a>
          </p>
        </div>
      </form>
    </div>
  )}

  {/* Formulario de Registro */}
  {isRegistering && (
    <div className="form-box register">
      <form onSubmit={handleRegister}>
        <h1 className = "title">Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button-style">
          Register
        </button>
        <div className="register-link">
          <p>
            Already have an account?{" "}
            <a href="#" onClick={() => setIsRegistering(false)}>
              Login here
            </a>
          </p>
        </div>
      </form>
    </div>
  )}
</div>

  );
}

export default Login;

