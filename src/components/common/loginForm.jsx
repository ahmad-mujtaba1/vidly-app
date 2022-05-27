import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "password is required";
    }
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "user name is required";
    if (account.password.trim() === "")
      errors.password = "user password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("submitted");
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            error={errors.username}
            name="username"
            value={account.username}
            label="username"
            onChange={this.handleChange}
          />
          <Input
            error={errors.password}
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
