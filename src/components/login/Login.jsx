import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {  
    e.preventDefault();
    toast.success("Login successful");
  }

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Enter your email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button>Sign In</button>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="item">
        <h2>Create an Accunt</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an Image</label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
          />
          <input type="email" name="email" placeholder="Enter your email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
