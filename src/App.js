import React, { Component } from 'react';
import styles from './style.css';

import Process from './Process/index';

export default class App extends Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.test}>
        <Process />
      </div>
    );
  }
}
