import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Contact from '../components/Contact';
import Signup from '../components/Signup';
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="scrolling-box">
        <Navbar />
        <Header />
        <About />
        <Contact />
        <Signup />
        <Footer />
      </div>
    );
  }
}

export default withRouter(HomePage);
