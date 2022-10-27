import React, { Fragment, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = ({ handleDelete }) => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback && feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  // return (
  //   <Fragment>
  //     <div className="feedback-list">
  //       {feedback.map((item, index) => (
  //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //       ))}
  //     </div>
  //   </Fragment>
  // );

  return (
    <Fragment>
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Fragment>
  );
};

export default FeedbackList;
