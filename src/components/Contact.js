import React, {  } from 'react';

const Contact = () => (
  <div id="Contact" className="padding js--section-contact">
    <div className="row text-center logo section">
      <div className="col span-1-of-3 box">
        <div className="feature-box">
          <i className="fas fa-book-reader feature-box__icon"></i>
          <h3>Sign up</h3>

        <p className="feature-box__text paragraph">
          Sign up for Lottery Lunch with your name and email address. Don't forget to tell us something about you :)
        </p>
      </div>
    </div>
    
      <div className="col span-1-of-3 box">
        <div className="feature-box">
          <i className="feature-box__icon fas fa-globe-europe"></i>
          <h3>Loading . . .</h3>
          <p className="feature-box__text paragraph">
            The system is then loaded and choose the best fit partner for you
          </p>
        </div>
      </div>
      <div className="col span-1-of-3 box">
        <div className="feature-box">
          <i className="feature-box__icon far fa-check-circle"></i>
          <h3>Done!</h3>
          <p>
            Now, you will receive an email about your partner. Time to eat now! 
          </p>
        </div>
      </div>
    </div>    
</div>
);
export default Contact;
