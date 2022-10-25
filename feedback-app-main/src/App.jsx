import React, { Fragment } from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import PropTypes from 'prop-types';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </Fragment>
  );
};

// Default for Props
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0.0.4)',
  textColor: '#ff6a95',
};

Header.prototype = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default App;
