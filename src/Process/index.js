import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Process extends React.Component {
  render() {
    const imgSrc = require('../assets/process-horiz.png'); // eslint-disable-line
    return (
      <div>
        Process
        <img src={imgSrc} alt="The ReactForge Process." />
      </div>
    );
  }
}
