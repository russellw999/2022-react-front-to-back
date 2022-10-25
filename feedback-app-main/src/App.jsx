import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import PropTypes from 'prop-types';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
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
