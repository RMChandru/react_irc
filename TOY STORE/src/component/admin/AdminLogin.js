// AdminLogin.js
import React from "react";
import { Link } from "react-router-dom";
function AdminLogin() {
  return (
    <div className="App">
      <div className="login-container">

        <h2>Admin Login</h2>
        <form className="form">
          <input type="text" placeholder="Admin Username" required /><br />
          <input type="password" placeholder="Admin Password" required /><br />
          <a href="#.com" className="link">Forget Password?</a>
          <button type="submit"><Link to='/admindash' className="but">Admin Login</Link></button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
