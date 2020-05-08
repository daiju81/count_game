import React, { Component } from 'react';
import { jsx, css } from '@emotion/core';
jsx;

const siimpleBtnFixStyle = css`
  height: 6rem !important;
  line-height: 6rem !important;
`;

class CountButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div
          className="siimple-btn siimple-btn--primary siimple-btn--fluid"
          css={siimpleBtnFixStyle}
          onClick={() => {
            this.props.countBtn();
          }}
        >
          +1
        </div>
        <div
          className="siimple-btn siimple-btn--dark siimple-btn--fluid"
          css={siimpleBtnFixStyle}
          onClick={() => {
            this.props.countMinusBtn();
          }}
        >
          -1
        </div>
      </div>
    );
  }
}

export default CountButton;
