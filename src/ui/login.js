import React from 'react';
import { login } from './api/api';



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
        <form>
          <input placeholder="username"/><br/>
          <input placeholder="password" /><br/>
          <button>Submit</button>
        </form>
    )
  }
})  