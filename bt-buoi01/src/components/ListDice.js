import React from "react";

class ListDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="list-dice">
        <img className="dice-1" src={this.props.src1} alt="" />
        <img id="dice-2" src={this.props.src2} alt="" />
      </div>
    );
  }
}

export default ListDice;
