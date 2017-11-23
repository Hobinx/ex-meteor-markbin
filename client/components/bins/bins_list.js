import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {
  renderList() {
    return this.props.bins.map(bin => {
      return (
        <li className="list-group-item" key={bin._id}>
          Bin {bin._id}
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default withTracker(props => {
  Meteor.subscribe('bins');

  return { bins: Bins.find({}).fetch() };
})(BinsList);