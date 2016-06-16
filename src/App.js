import React, { Component } from 'react';
// import styles from './style.css';
import BenefitsContainer from './components/BenefitsContainer';

/*  eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  render() {
    return (
      <div>
        <BenefitsContainer />
      </div>
    );
  }
}
