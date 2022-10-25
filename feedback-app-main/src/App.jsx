import React, { Fragment } from 'react';
import Header from './components/Header';
import PropTypes from 'prop-types';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <h1>My App</h1>
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
