import { v4 as uuidv4 } from 'uuid';
import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';

import FeedbackData from './data/FeedbackData';
import PropTypes from 'prop-types';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(`App.js addFeedback - newFeedback`);
    console.log(newFeedback);

    // add to our app level state
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    // console.log('App ', id);
    if (window.confirm('Are You Sure you want to delete ?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
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

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default App;
