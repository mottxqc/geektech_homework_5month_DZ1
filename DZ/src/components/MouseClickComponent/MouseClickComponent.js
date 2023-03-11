import React, { Component } from "react";

class MouseClickComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <button
        className="MouseClickComponent"
        onClick={this.props.onClick}
        onContextMenu={this.props.onContextMenu}
      >
        {this.props.buttonName} button has been pressed
      </button>
    );
  }
}

export default MouseClickComponent;