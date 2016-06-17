import React from 'react';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Process extends React.Component {
  render() {
    const imgSrc = require('../assets/process-horiz.png'); // eslint-disable-line
    return (
      <div className={styles.container}>
        <img src={imgSrc} alt="The ReactForge Process." />
      </div>
    );
  }
}
