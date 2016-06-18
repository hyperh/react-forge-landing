import React, { Component } from 'react';
import styles from './styles.css';

/*  eslint-disable react/prefer-stateless-function */
class Benefits extends Component {
  render() {
    return (
      <div className={styles.prevWork}>
        <img
          src={this.props.img}
          alt={this.props.title}
        />
        <p className={styles.title}>{this.props.title}</p>
        <p className={styles.description}>
          {this.props.description}
        </p>
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
