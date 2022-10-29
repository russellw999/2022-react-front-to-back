import React, { useState, useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
const FeedbackItem = ({ item }) => {
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState('This is an example of a feedback item');

  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
