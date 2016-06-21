import React from 'react';

import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>Artisinally crafted by <a href="http://github.com/adrianmc" target="_blank">Adrian</a> and friends.</div>
        <div>Copyright &copy; ReactForge 2016.</div>
      </div>
    );
  }
}
