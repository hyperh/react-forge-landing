import React, { Component } from 'react';
import CtaButton from '../CtaButton';
import styles from './styles.css';

/*  eslint-disable react/prefer-stateless-function */
class Cta extends Component {
  render() {
    return (
      <div className={styles.cta}>
        <p className={styles.description}>
          Get a page of mockups converted to <b>React</b>
          <br /> components for just <b>$97!</b>
        </p>
        <CtaButton />
      </div>
    );
  }
}

export default Cta;
