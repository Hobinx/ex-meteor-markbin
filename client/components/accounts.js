import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    // Render the Blaze accounts from and place the Blaze accounts form
    // in the component div
    this.view = Blaze.render(Template.loginButtons,
                             ReactDOM.findDOMNode(this.container));
  }

  componentWillUnmount() {
    // clean up the Blaze form
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref={div => this.container = div}></div>
    );
  }
}

export default Accounts;