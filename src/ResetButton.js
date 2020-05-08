import React, { Component } from 'react';

class ResetButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        onClick={() => {
          this.props.resetBtn();
        }}
        className="siimple-btn siimple-btn--error"
      >
        Error button
      </div>
    );
  }
}

export default ResetButton;
