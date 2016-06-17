import React from 'react';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Process extends React.Component {
  render() {
    const laptop = require('../assets/laptop.png'); // eslint-disable-line global-require
    const fileTypes = require('../assets/file-types.png'); // eslint-disable-line global-require
    const code = require('../assets/code.png'); // eslint-disable-line global-require

    return (
      <div className={styles.container}>
        <div className={`${styles.process}`}>
          <img src={laptop} alt="Laptop" className={styles['img-responsive']} />
          <img src={fileTypes} alt="File Types" className={styles['img-responsive']} />
          <img src={code} alt="Code" className={styles['img-responsive']} />
        </div>
      </div>
    );
  }
}
