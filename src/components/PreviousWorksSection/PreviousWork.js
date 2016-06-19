import React, { Component } from 'react';
import styles from './styles.css';
import { PhotoSwipe } from 'react-photoswipe';

import 'react-photoswipe/lib/photoswipe.css';

/*  eslint-disable react/prefer-stateless-function */
class Benefits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      items: props.items,
      item: props.items[props.index],
      index: props.index,
      options: {
        closeOnScroll: false,
        index: props.index,
      },
    };

    this.openPhotoSwipe = (e) => {
      e.preventDefault();
      this.setState({
        isOpen: true,
      });
    };

    this.handleClose = () => {
      this.setState({
        isOpen: false,
      });
    };
  }
  render() {
    let { src, title, description } = this.state.item;
    let { isOpen, items, options } = this.state;
    return (
      <div className={styles.prevWork}>
        <a href="#" onClick={this.openPhotoSwipe}>
          <img
            className={styles.thumbnail}
            src={src}
            alt={title}
          />
        </a>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>
          {description}
        </p>
        <PhotoSwipe
          id="photoswipe"
          isOpen={isOpen}
          items={items}
          options={options}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

Benefits.propTypes = {
  items: React.PropTypes.array.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default Benefits;
