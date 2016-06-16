import React, { Component } from 'react';
import styles from '../styles.css';

import Header from './Header/index';

export default class App extends Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.app}>
        <Header />
      </div>
    );
  }
}
