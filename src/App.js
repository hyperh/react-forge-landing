import React, { Component } from 'react';
import PreviousWorksContainer from './components/PreviousWorksContainer';
// import styles from './style.css';

export default class App extends Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <PreviousWorksContainer />
      </div>
    );
  }
}
