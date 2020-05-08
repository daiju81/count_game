import React, { Component } from 'react';
import { Global, css } from '@emotion/core';

class CountResult extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Global
          styles={css`
            .some-class {
              color: skyblue !important;
            }
          `}
        />
        <Global
          styles={{
            '.some-class': {
              fontSize: 50,
              textAlign: 'center',
            },
          }}
        />
        <div className="some-class">{this.props.resultCount}</div>
      </div>
    );
  }
}

export default CountResult;
