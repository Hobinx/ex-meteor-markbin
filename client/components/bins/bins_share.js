import React, { Component } from 'react';

class BinsShare extends Component {
  onShareClick() {

  }

  render() {
    return (
      <footer className="bins-share">
        <div className="input-group">
          <input type="email" className="form-control"/>
          <div className="input-group-btn">
            <button onClick={this.onShareClick.bind(this)} className="btn btn-default">
              Share Bin
            </button>
          </div>
        </div>
      </footer>
    );
  }
}

export default BinsShare;