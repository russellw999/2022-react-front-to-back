import React, { useState, Fragment } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('Hello');

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 Characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
    // console.log(e.target.value);
  };

  const handleSelectRating = (rating) => {
    console.log(`handleSelectRating : ${rating}`);
    setRating(rating);
  };

  return (
    <Fragment>
      <Card>
        <form>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={(rating) => handleSelectRating(rating)} />

          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </Fragment>
  );
};

export default FeedbackForm;
