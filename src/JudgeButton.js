import React, { Component } from 'react';
import { jsx, css } from '@emotion/core';
jsx;

const judgeBtnStyle = css`
  text-align: center;
  padding: 1rem;
`;

class JudgeButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div css={judgeBtnStyle}>
          <div
            onClick={() => {
              this.props.judgeBtn();
            }}
            className="siimple-btn siimple-btn--light"
          >
            判定
          </div>
        </div>
      </div>
    );
  }
}

export default JudgeButton;
