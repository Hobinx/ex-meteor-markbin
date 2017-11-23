import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsMain extends Component {
  render() {
    return (
      <div>BinsMain</div>
    );
  }
}

export default withTracker(props => {
  const { binId } = props.match.params;

  Meteor.subscribe('bins');

  return { bin: Bins.findOne(binId) };
})(BinsMain);