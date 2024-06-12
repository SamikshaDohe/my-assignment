// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <img
          src="logo.png" 
          alt="Logo"
          className="logo"
        />
      <div className="login-container">
       
        
        <h2>Sign In Access</h2>
        <p>You must become a member to login and access the entire site.</p>
        <form>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password</a>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className="signup-link">
          Not a member yet? <a href="/sign-up">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default App;

