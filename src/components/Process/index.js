import React from 'react';
import styles from './styles.css';
import CtaButton from '../CtaButton';

import laptop from '../../assets/laptop.png';
import fileTypes from '../../assets/file-types.png';
import arrow from '../../assets/arrow-right.png';
import code from '../../assets/code.png';

/* eslint-disable react/prefer-stateless-function */
export default class Process extends React.Component {
  render() {
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
        <CtaButton />
      </div>
    );
  }
}
