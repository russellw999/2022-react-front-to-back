import React, { Fragment } from 'react';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback }) => {
  console.log(feedback);

  if (!feedback && feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <Fragment>
      <div className="feedback-list">FeedbackList</div>
      {feedback.map((item, index) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </Fragment>
  );
};

export default FeedbackList;
