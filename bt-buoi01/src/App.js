import "./style.css";
import { Component } from "react";
import Logo from "./components/Logo";
import ListDice from "./components/ListDice";
import Button from "./components/Button";

var arrDice = [
  "/images/dice1.png",
  "/images/dice2@2x.png",
  "/images/dice3@2x.png",
  "/images/dice4@2x.png",
  "/images/dice5@2x.png",
  "/images/dice6@2x.png",
];

function getDiceIndex(number) {
  return number - 1;
}

function randomDice() {
  return getDiceIndex(Math.floor(Math.random() * 6 + 1));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: arrDice[0],
      dice2: arrDice[0],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    //      console.log("3. handleClick [App.js]", evt.target);
    const random1 = randomDice();
    const random2 = randomDice();
    this.setState({
      dice1: arrDice[random1],
      dice2: arrDice[random2],
    });
  }

  render() {
    const src1 = this.state.dice1;
    const src2 = this.state.dice2;
    return (
      <div>
        <div className="container">
          <Logo />
          <ListDice src1={src1} src2={src2} />
          <Button onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
