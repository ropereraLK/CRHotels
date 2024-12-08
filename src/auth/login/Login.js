import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/authSlice";
import { addUser } from "../../redux/userSlice";
import store from "../../redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ handleSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClear = () => {
    setUsername("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, password });
    const userData = {
      name: { username },
    };
    console.log("user Data:", { userData });
    dispatch(logIn(username));

    console.log("Current Redux Store:", store.getState());
    handleSignIn();
  };
  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-control" 
          />
        </div>
        <div>
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            className="form-control" 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success">Login</button>
          <button type="button" onClick={handleClear} className="btn btn-warning">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
