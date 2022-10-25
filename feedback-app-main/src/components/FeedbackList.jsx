import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
  console.log(feedback);

  if (!feedback && feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <Fragment>
      <div className="feedback-list">FeedbackList</div>
      {feedback.map((item, index) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </Fragment>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
