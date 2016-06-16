import React from 'react';
import styles from './header.css';

/* eslint-disable react/prefer-stateless-function */
export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <div className={styles.logoText}>REACT</div>
          <div className={styles.logoSymbol} />
          <div className={styles.logoText}>FORGE</div>
        </div>

        <div className={styles.tagline}>
          We turn your designer mockups into React components.
        </div>
      </div>
    );
  }
}
