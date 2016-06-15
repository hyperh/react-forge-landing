import React, { Component } from 'react';
import styles from './style.css';

export default class App extends Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.test}>
        <h1>33, world.</h1>
        <div id={styles.myId} className={styles.test}>1</div>
        <div className={styles.test}>2</div>
        <div className={styles.test}>3</div>
      </div>
    );
  }
}
