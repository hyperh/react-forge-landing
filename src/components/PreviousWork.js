import React, { Component } from 'react';
import styles from '../style.css';

/*  eslint-disable react/prefer-stateless-function */
class Benefits extends Component {
  render() {
    return (
      <div className={styles.benefits}>
        <div className={styles.highlights}>
          <img src={this.props.img} alt={this.props.alt} />
          <h5>{this.props.title}</h5>
        </div>
        <p className={styles.description}>{this.props.description}</p>
      </div>
    );
  }
}

Benefits.propTypes = {
  img: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Benefits;
