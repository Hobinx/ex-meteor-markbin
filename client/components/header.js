import React, { Component } from 'react';
import Accounts from './accounts';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


class Header extends Component {
  onBinCreate(event) {
    event.preventDefault();

    Meteor.call('bins.insert', (err, binId) => {
      this.props.history.push(`/bins/${binId}`);
    });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Markbin</Link>
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

export default withRouter(Header);