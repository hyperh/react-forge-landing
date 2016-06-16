import React, { Component } from 'react';
import styles from '../style.css';
import PreviousWork from './PreviousWork';

/*  eslint-disable react/prefer-stateless-function */
class PreviousWorksContainer extends Component {
  render() {
    const olisImg = require('../assets/olis.png'); // eslint-disable-line
    const olisLandingImg = require('../assets/olis-landing.png'); // eslint-disable-line

    return (
      <div className={styles.prevWorksContainer}>
        <h1>Our Previous Works</h1>
        <hr className={styles.prevWorksHr} />
        <div className={styles.prevWorks}>
          <PreviousWork
            img={olisLandingImg}
            title="Olis Landing Page"
            description="A landing page for a team collaboration chat app"
          />
          <PreviousWork
            img={olisImg}
            title="Olis"
            description="A team collaboration chat app"
          />
        </div>
      </div>
    );
  }
}

export default PreviousWorksContainer;
