import React, { Component } from 'react';
import CountButton from './CountButton';
import CountResult from './CountResult';
import ResetButton from './ResetButton';
import JudgeButton from './JudgeButton';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultCount: 1,
      randomNum: this.randomNumFunc(),
    };
    this.countBtn = this.countBtn.bind(this);
    this.resetBtn = this.resetBtn.bind(this);
    this.countMinusBtn = this.countMinusBtn.bind(this);
    this.judgeBtn = this.judgeBtn.bind(this);
  }
  randomNumFunc() {
    return Math.floor(Math.random() * 10);
  }
  countBtn() {
    this.setState({
      resultCount: this.state.resultCount + 1,
    });
  }
  countMinusBtn() {
    this.setState({
      resultCount:
        this.state.resultCount - 1 > 0 ? this.state.resultCount - 1 : 1,
    });
  }
  resetBtn() {
    if (confirm('リセットして良いですか？')) {
      this.setState({
        resultCount: 0,
      });
    }
  }
  judgeBtn() {
    if (confirm('判定して良いですか?')) {
      if (this.state.randomNum === this.state.resultCount) {
        alert('正解');
      } else {
        alert(`不正解!正解は${this.state.randomNum}`);
      }
      this.setState({
        randomNum: this.randomNumFunc(),
      });
    }
  }
  render() {
    return (
      <div>
        <CountResult resultCount={this.state.resultCount} />
        <CountButton
          countBtn={this.countBtn}
          countMinusBtn={this.countMinusBtn}
        />
        <ResetButton resetBtn={this.resetBtn} />
        <JudgeButton judgeBtn={this.judgeBtn} />
      </div>
    );
  }
}

export default Count;
