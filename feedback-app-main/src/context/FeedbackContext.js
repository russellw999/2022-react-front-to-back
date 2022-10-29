import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This item is feedback item 1 from context', rating: 7 },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(`FAeedbackContextProvider - addFeedback - newFeedback`);
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
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
