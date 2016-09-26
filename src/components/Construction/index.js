import React, { Component } from 'react';
import styles from './styles.css';

/*  eslint-disable react/prefer-stateless-function */
class Construction extends Component {
  render() {
    return (
      <div>
        <p className={styles.message}>
          This page is currently under construction, please send an email to&nbsp;
          <a href="mailto:li.adrianmc@gmail.com" target="_blank">Adrian</a><br />
          if you are interested in React.js consulting.
        </p>
      </div>
    );
  }
}

export default Construction;
