import React, { Component } from 'react';


class MoonEvent extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {

    return (
      <div className="rbc-event-content" 
        title={this.props}
        icon={this.props}>
      </div>
    );
  }
}

export default MoonEvent;