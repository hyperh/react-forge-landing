import React from 'react';

import Header from './Header';
import Process from './Process';
import Benefits from './Benefits';
import CTA from './CTA';
import PreviousWork from './PreviousWork';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <Header />
        <Process />
        <Benefits />
        <CTA />
        <PreviousWork />
        <Footer />
      </div>
    );
  }
}
