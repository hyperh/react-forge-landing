import React, { Component } from 'react';
// import styles from './style.css';
import Cta from './components/Cta/';
import PreviousWorksSection from './components/PreviousWorksSection/';

export default class App extends Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <PreviousWorksSection />
        <Cta />
      </div>
    );
  }
}
