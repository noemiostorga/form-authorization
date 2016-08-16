import React from 'react';
import { login } from 'api/api';

export default React.createClass({
  getInitialState: function () {
    return {
      username: '',
      password: ''
    }
  },
  handleChange: function(e) {
    var newState = Object.assign({}, this.state);
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },
  handleSubmit: function(e) {
    e.preventDefault();

    login(this.state.username, this.state.password);
  },
  render: function () {
    return (
      <form id="login" onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <input name="username" value={this.state.username} onChange={this.handleChange} /><br />
        <input name="password" value={this.state.password} onChange={this.handleChange} type="password" /><br />
        <button type="submit">submit</button>
      </form>
    )
  }
}) 