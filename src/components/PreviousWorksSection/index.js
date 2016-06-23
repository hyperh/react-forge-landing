import React, { Component } from 'react';
import styles from './styles.css';
import PreviousWork from './PreviousWork';

import olisImg from '../../assets/olis-min.png';
import olisLandingImg from '../../assets/olis-landing-min.png';

/*  eslint-disable react/prefer-stateless-function */
class PreviousWorksSection extends Component {
  render() {
    const items = [
      {
        src: olisLandingImg,
        title: 'Olis Landing Page',
        description: 'A landing page for a team collaboration chat app',
        w: 1440,
        h: 1167,
      },
      {
        src: olisImg,
        title: 'Olis',
        description: 'A team collaboration chat app',
        w: 1160,
        h: 732,
      },
    ];
    let PrevWork = items.map((item, idx, arr) =>
      <PreviousWork
        items={arr}
        index={idx}
        key={idx}
      />
    );
    return (
      <div className={styles.PreviousWorksSection}>

        <h1>Our Previous Work</h1>
        <hr className={styles.prevWorksHr} />

        <div className={styles.prevWorks}>
          {PrevWork}
        </div>
      </div>
    );
  }
}

export default PreviousWorksSection;
