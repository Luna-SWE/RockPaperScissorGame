import React, { Component } from 'react';

export default class BoxClass extends Component {
  constructor() {
    super();
    this.finalResult = '';
  }

  getResult = () => {
    if (
      this.props.title === 'Computer' &&
      this.props.result !== 'tie' &&
      this.props.result !== ''
    ) {
      this.finalResult = this.props.result === 'win' ? 'lose' : 'win';
    } else {
      this.finalResult = this.props.result;
    }
  };
  render() {
    this.getResult();
    return (
      <div className={`box ${this.finalResult}`}>
        <h1>{this.props.title}</h1>
        <img
          src={
            this.props.item
              ? this.props.item.img
              : 'https://cdn-icons-png.flaticon.com/512/6028/6028784.png'
          }
          alt='rockpaperscissors'
          width={300}
        />
        <h2>
          {this.finalResult ? (
            this.finalResult.toUpperCase()
          ) : (
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Lw10HDOyIeeojw12Tn6zzJ_eEY_1WRNMs3vLig3TsKtEJCgVuSKgsszLjLDKDo_tWDQ&usqp=CAU'
              alt='thumbs-up-down'
            />
          )}
        </h2>
      </div>
    );
  }
}
