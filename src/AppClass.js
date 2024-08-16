import React, { Component } from 'react';
import './App.css';
import { FaHandRock, FaHandPaper } from 'react-icons/fa';
import { FaHandScissors } from 'react-icons/fa6';
import BoxClass from './component/BoxClass';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://feelstory.com/gnu/nori/img/2_on.png',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3Ir3xXnMM9f3ljc9J-TEiPPY_SV4TD2r9ccpeUr-2eag1mSxr9mOvHd7fqVdCtQ23p4&usqp=CAU',
  },
  paper: {
    name: 'Paper',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtvBz0hkGbRMxgiVLY9IyA1e0XCbNoURbvw&s',
  },
};

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    };
  }

  play = (userChoice) => {
    const computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors')
      return computer.name === 'Paper' ? 'win' : 'lose';
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'win' : 'lose';
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  reset = () => {
    this.setState({
      userSelect: null,
      computerSelect: null,
      result: '',
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='main'>
          <BoxClass
            title='You'
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title='Computer'
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className='main'>
          <button onClick={() => this.play('scissors')}>
            <FaHandScissors />
          </button>
          <button onClick={() => this.play('rock')}>
            <FaHandRock />
          </button>
          <button onClick={() => this.play('paper')}>
            <FaHandPaper />
          </button>
        </div>
        {this.state.result ? (
          <div className='reset-btn'>
            <button onClick={this.reset}>Reset</button>
          </div>
        ) : null}
      </div>
    );
  }
}
