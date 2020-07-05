import React, { Component } from "react";
import "./style.scss";

export default class SignUp extends Component {
  render() {
    return (
      <div className="base-container">
        <div className="header">SignUp</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            SignUp
          </button>
        </div>
      </div>
    );
  }
}
