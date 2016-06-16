import React, { Component } from 'react';
// import styles from './style.css';
import BenefitsSection from './components/BenefitsSection/';

/*  eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  render() {
    return (
      <div>
        <BenefitsSection />
      </div>
    );
  }
}
