import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(evt) {
    // Do something ???
    this.props.onClick(evt);
  }

  render() {
    return (
      <button className="roll-dice" onClick={this.handleOnClick}>
        Roll Dice
      </button>
    );
  }
}

export default Button;
