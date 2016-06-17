import React, { Component } from 'react';
import styles from './styles.css';

/*  eslint-disable react/prefer-stateless-function */
class Benefit extends Component {
  render() {
    const { icon, highlight, description } = this.props;
    const Icon = icon;
    return (
      <div className={styles.benefit}>
        <h1><Icon /></h1>
        <p>{highlight}</p>
        <p className={styles.description}>{description}</p>
      </div>
    );
  }
}

Benefit.propTypes = {
  icon: React.PropTypes.element.isRequired,
  description: React.PropTypes.string.isRequired,
  highlight: React.PropTypes.string.isRequired,
};

export default Benefit;
