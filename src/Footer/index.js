import React from 'react';

import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>Artisinally crafted by Adrian and friends.</div>
        <div>Copyright ReactForge 2016.</div>
      </div>
    );
  }
}
