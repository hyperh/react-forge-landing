import React, { Component } from 'react';
import styles from '../style.css';

/*  eslint-disable react/prefer-stateless-function */
class Benefits extends Component {
  render() {
    return (
      <div className={styles.benefits}>
        <div className={styles.highlights}>
          <p>{this.props.icon}</p>
          <p>{this.props.highlight}</p>
        </div>
        <p className={styles.description}>{this.props.description}</p>
      </div>
    );
  }
}

Benefits.propTypes = {
  icon: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  highlight: React.PropTypes.string.isRequired,
};

export default Benefits;
