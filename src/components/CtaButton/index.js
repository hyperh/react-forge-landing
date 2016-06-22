import React, { Component } from 'react';
import styles from './styles.css';

/*  eslint-disable react/prefer-stateless-function */
class CtaButton extends Component {
  /* eslint-disable */
  componentDidMount() {
    var qs, js, q, s, d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = 'typef_orm',
      b = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
    if (!gi.call(d, id)) {
      js = ce.call(d, 'script');
      js.id = id;
      js.src = b + 'share.js';
      q = gt.call(d, 'script')[0];
      q.parentNode.insertBefore(js, q);
    }
  }
  /* eslint-enable */

  render() {
    return (
      <a
        className={`typeform-share link ${styles.btn}`}
        href="https://adrianmcli.typeform.com/to/Kq866Q"
        data-mode="1"
        target="_blank"
      >
        Submit Your Design!
      </a>
    );
  }
}

export default CtaButton;
