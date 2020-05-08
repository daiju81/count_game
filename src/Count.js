import React, { Component } from 'react';
import CountButton from './CountButton';
import CountResult from './CountResult';
import ResetButton from './ResetButton';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultCount: 0,
    };
    this.countBtn = this.countBtn.bind(this);
    this.resetBtn = this.resetBtn.bind(this);
  }
  countBtn() {
    this.setState({
      resultCount: this.state.resultCount + 1,
    });
  }
  resetBtn() {
    this.setState({
      resultCount: 0,
    });
  }
  render() {
    return (
      <div>
        <CountResult resultCount={this.state.resultCount} />
        <CountButton countBtn={this.countBtn} />
        <ResetButton resetBtn={this.resetBtn} />
      </div>
    );
  }
}

export default Count;
