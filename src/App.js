import React, { Component } from 'react';
import Count from './Count';
import { jsx, css } from '@emotion/core';
jsx;

const titleStyle = css`
  color: #364e96;
  text-align: center;
  padding: 0.5em 0;
  border-top: solid 3px #364e96;
  border-bottom: solid 3px #364e96;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 css={titleStyle}>カウントゲーム</h1>
        <Count />
      </div>
    );
  }
}

export default App;
