import React, { Component } from 'react';
import { Typography } from 'material-ui';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Typography type="display3" className="title">
          <span>Daniel's School Projects </span><br/>
          <i className="material-icons md-48">&#xE313;</i>
        </Typography>
      </header>
    );
  }
}

export default Header;