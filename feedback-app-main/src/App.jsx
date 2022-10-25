import React, { Fragment } from 'react';
import Header from './components/Header';
import PropTypes from 'prop-types';

const App = () => {
  return (
    <Fragment>
      <Header text={true} />
      <div className="container">
        <h1>My App</h1>
      </div>
    </Fragment>
  );
};

// Default for Props
Header.defaultProps = {
  text: 'Feedback UI',
};

Header.prototype = {
  text: PropTypes.string,
};

export default App;
