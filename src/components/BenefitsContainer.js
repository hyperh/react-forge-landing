import React, { Component } from 'react';
import styles from '../style.css';
import Benefits from './Benefits';

/*  eslint-disable react/prefer-stateless-function */
class BenefitsContainer extends Component {
  render() {
    return (
      <div className={styles.benefitsContainer}>
        <Benefits
          icon="testing"
          highlight="LIGHTNING SPEED"
          description={
            'In just 5 business days, '
            + 'we turn a page of your designer mock up into React.js components for $97. '
            + 'A custom boilerplate made just for you.'
          }
        />
        <Benefits
          icon="testing"
          highlight="HIT THE GROUND RUNNING"
          description={
            'Stop wasting time fiddling with CSS and '
            + 'let us do the grunt work. All you need to'
            + ' do is wire up your data and you\'re ready'
            + 'to go.'
          }
        />
        <Benefits
          icon="testing"
          highlight="STATE OF THE ART"
          description={
            'Webpack, Hot Module Replacement'
            + 'CSS Modules, etc. WE use the best-in-'
            + 'class technologies to give you the best'
            + 'development experience'
          }
        />
      </div>
    );
  }
}

export default BenefitsContainer;
