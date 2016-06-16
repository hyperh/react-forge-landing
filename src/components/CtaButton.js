import React, { Component } from 'react';
import styles from '../style.css';

/*  eslint-disable react/prefer-stateless-function */
class CtaButton extends Component {
  render() {
    return (
      <button className={`${styles.btn} ${styles.ctaButton}`}>
        Submit Your Design!
      </button>
    );
  }
}

export default CtaButton;
