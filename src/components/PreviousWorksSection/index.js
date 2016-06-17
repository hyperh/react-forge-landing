import React, { Component } from 'react';
import styles from './styles.css';
import PreviousWork from './PreviousWork';

import olisImg from '../../assets/olis-min.png';
import olisLandingImg from '../../assets/olis-landing-min.png';


/*  eslint-disable react/prefer-stateless-function */
class PreviousWorksSection extends Component {

  render() {
    return (
      <div className={styles.PreviousWorksSection}>

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

export default PreviousWorksSection;
