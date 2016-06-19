import React, { Component } from 'react';
import styles from './styles.css';

/*  eslint-disable react/prefer-stateless-function */
class Benefit extends Component {
  render() {
    const { icon, title, description } = this.props;
    const Icon = icon;
    return (
      <div className={styles.benefit}>
        <p className={styles.icon}><Icon /></p>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    );
  }
}

Benefit.propTypes = {
  icon: React.PropTypes.func.isRequired,
  description: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Benefit;
