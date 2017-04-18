import React, { Component } from "react";

// <TogglePanel isOpen={false} />
// this.props.isOpen
export default class TogglePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {open: props.isOpen};

    // this.setState({open: true});
    // this.state.open === ??
  }

  toggle() {
    console.log(this.state.open)
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className="toggle-panel">
        <button onClick={() => { this.toggle() }}>Click</button>
        <div className={this.state.open ? "" : "hidden"}>panel content</div>
      </div>
    );
  }

}
