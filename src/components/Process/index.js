import React from 'react';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Process extends React.Component {
  render() {
    const laptop = require('../../assets/laptop.png'); // eslint-disable-line global-require
    const fileTypes = require('../../assets/file-types.png'); // eslint-disable-line global-require
    const arrow = require('../../assets/arrow-right.png'); // eslint-disable-line global-require
    const code = require('../../assets/code.png'); // eslint-disable-line global-require

    return (
      <div className={styles.container}>
        <div className={styles.process}>
          <div className={styles.stepContainer}>
            <div className={styles.stepText}>
              <div className={styles.numberCircle}>1</div>
              <div>Submit your design</div>
            </div>
            <img src={laptop} alt="Laptop" className={styles.laptop} />
          </div>

          <div className={styles.centerContainer}>
            <img src={fileTypes} alt="File Types" className={styles.fileTypes} />
            <img src={arrow} alt="File Types" className={styles.arrow} />
          </div>

          <div className={styles.stepContainer}>
            <div className={styles.stepText}>
              <div className={styles.numberCircle}>2</div>
              <div>Receive code in 5 days</div>
            </div>
            <img src={code} alt="Code" className={styles.code} />
          </div>
        </div>
      </div>
    );
  }
}
