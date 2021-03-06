import React, { Component } from 'react';
import { jsx, css } from '@emotion/core';
jsx;

const risetBtnStyle = css`
  text-align: center;
  padding: 1rem;
`;

class ResetButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div css={risetBtnStyle}>
          <div
            onClick={() => {
              this.props.resetBtn();
            }}
            className="siimple-btn siimple-btn--error"
          >
            カウントリセット
          </div>
        </div>
      </div>
    );
  }
}

export default ResetButton;
