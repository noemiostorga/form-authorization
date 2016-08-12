import React from 'react';

export default React.createClass({
  render: function () {
    return (
        <form>
          <input placeholder="username"/>
          <input placeholder="password" />
          <button>Submit</button>
        </form>
    )
  }
})  