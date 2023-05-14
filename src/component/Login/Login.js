import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { Admin } from "../../Context/Admin";
import "./Login.css";
import Mask from "../Mask/Mask";

const Login = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [username, setUsername] = useState(localStorage.getItem("user") || "");

  //Handle Route when click Log out Log in
  function handleLogInLogOut(token, user) {
    setToken(token);
    setUsername(user);
    sessionStorage.setItem("token", token);
    localStorage.setItem("user", user);
    // redirect("/login");
  }

  // Declare state variables for username, password, and notification
  // const { username, setUsername, handleLogInLogOut } = useContext(Admin);
  const [password, setPassword] = useState("");
  const [noti, setNoti] = useState("");
  // const redirect = useNavigate();

  // Handle submit event for login form
  const handleSubmit = async (event) => {
    event.preventDefault();
    //Get Account input from user
    const account = { user: username, password: password };
    console.log(account);
    //Call API to compare account input to account List
    const res = await fetch("https://perfume-backend.onrender.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    });
    console.log(res);
    //Get status of response
    const status = res.status;
    const msg = await res.json();
    console.log(msg, status);
    // Check if status is bad then show Noti of message received from server
    if (status >= 400) {
      setNoti(msg);
    } else {
      //In case status is good, login successfully, then set Noti to "", set Token, and username based on accessToken received from server, and finally redirect to homepage
      setNoti("");
      handleLogInLogOut(`Bearer ${msg.accessToken}`, msg.username);
      // Save the token to localstorage with the key 'token'
      localStorage.setItem("token", `Bearer ${msg.accessToken}`);
      localStorage.setItem("refreshToken", `Bearer ${msg.refreshToken}`);
      // return redirect("/");
    }
  };

  // Handle logout event
  const handleLogout = () => {
    // Remove the token and username from localstorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Set the state variables to empty strings
    setToken("");
    setUsername("");
    // Redirect to login page
    // return redirect('/login');
  };

  // Return the JSX code for the login component
  return (
    <div className="login">
      {/* <div>
          <Mask />
        </div> */}
      <div className="log-in">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <label htmlFor="username">Username:</label> */}
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password:</label> */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            {/* <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button> */}
          </div>
          {noti && <p className="error">{noti}</p>}
        </form>
        {/* {token && (
          <div className="logout">
            <p>Welcome, {username}!</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Login;
