import React, { Component } from 'react';
import styles from '../style.css';
import PreviousWork from './PreviousWork';

/*  eslint-disable react/prefer-stateless-function */
class PreviousWorksContainer extends Component {
  render() {
    return (
      <div className={styles.prevWorks}>
        <h1>Our Previous Works</h1>
        <hr className={styles.prevWorksHr} />
        <PreviousWork
          img="../assets/olis-landing-page.png"
          alt="Olis Landing Page"
          title="Olis Landing Page"
          description="A landing page for a team collaboration chat app"
        />
        <PreviousWork
          img="../assets/olis-landing-page.png"
          alt="Olis Landing Page"
          title="Olis Landing Page"
          description="A landing page for a team collaboration chat app"
        />
      </div>
    );
  }
}

export default PreviousWorksContainer;
