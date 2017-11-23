import React, { Component } from 'react';
import Accounts from './accounts';

class Header extends Component {
  onBinCreate(event) {
    event.preventDefault();

    Meteor.call('bins.insert');
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand">Markbin</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a>
              <Accounts />
            </a>
          </li>
          <li>
            <a href="#" onClick={this.onBinCreate.bind(this)}>Create bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;