import React, { Component } from 'react';
import styles from '../styles.css';

import Header from './Header/';
// import Process from './Process/';
import Footer from './Footer/';
// import Cta from './Cta/';
// import PreviousWorksSection from './PreviousWorksSection/';
// import BenefitsSection from './BenefitsSection/';
import Construction from './Construction/';

export default class App extends Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    // return (
    //   <div className={styles.app}>
    //     <Header />
    //     <Process />
    //     <BenefitsSection />
    //     <PreviousWorksSection />
    //     <Cta />
    //     <Footer />
    //   </div>
    // );
    return (
      <div className={styles.app}>
        <Header />
        <Construction />
        <Footer />
      </div>
    );
  }
}
