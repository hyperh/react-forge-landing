import React, { Component } from 'react';
import styles from './styles.css';

/*  eslint-disable react/prefer-stateless-function */
class Benefits extends Component {
  render() {
    return (
      <div className={styles.benefits}>
        <div className={styles.highlights}>
          <img
            src={this.props.img}
            alt={this.props.title}
          />
        </div>
        <h4>{this.props.title}</h4>
        <span className={styles.description}>
          {this.props.description}
        </span>
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
