import React, { Component } from 'react';
import Benefit from './Benefit';
import styles from './styles.css';

import boltIcon from 'react-icons/lib/io/ios-bolt-outline';
import bikeIcon from 'react-icons/lib/io/android-bicycle';
import jsIcon from 'react-icons/lib/io/social-javascript-outline';

/*  eslint-disable react/prefer-stateless-function */
class BenefitsSection extends Component {
  render() {
    return (
      <div className={styles.benefitsSection}>
        <Benefit
          icon={boltIcon}
          title="LIGHTNING SPEED"
          description={
            'In just 5 business days, '
            + 'we turn a page of your designer mock up into '
            + 'React.js components for $97. '
            + 'A custom boilerplate made just for you.'
          }
        />
        <Benefit
          icon={bikeIcon}
          title="HIT THE GROUND RUNNING"
          description={
            'Stop wasting time fiddling with CSS and '
            + 'let us do the grunt work. All you need to'
            + ' do is wire up your data and you\'re ready'
            + 'to go.'
          }
        />
        <Benefit
          icon={jsIcon}
          title="STATE OF THE ART"
          description={
            'Webpack, Hot Module Replacement, '
            + 'CSS Modules, etc. We use the best-in-'
            + 'class technologies to give you the best'
            + 'development experience.'
          }
        />
      </div>
    );
  }
}

export default BenefitsSection;
