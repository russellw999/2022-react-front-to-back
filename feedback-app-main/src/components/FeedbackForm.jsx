import React, { useState, Fragment } from 'react';
import Card from './shared/Card';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <Fragment>
      <Card>
        <form>
          <h2>How would you rate your service with us?</h2>
          {/*/ @todo - rating select component*/}
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default FeedbackForm;
