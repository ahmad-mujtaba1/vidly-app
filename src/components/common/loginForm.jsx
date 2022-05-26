import React, { Component } from "react";
class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="password">password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;