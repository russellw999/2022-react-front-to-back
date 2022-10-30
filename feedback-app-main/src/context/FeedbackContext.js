import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const serverPort = 5000;
  const baseUrl = `http://localhost:${serverPort}/feedback?_sort=id&_order=desc`;

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback

  const fetchFeedback = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    //  console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(`FeedbackContextProvider - addFeedback - newFeedback`);
    console.log(newFeedback);

    // add to our app level state
    setFeedback([newFeedback, ...feedback]);
  };

  // Update feedbackItem
  const updateFeedback = async (id, updItem) => {
    //  console.log(id, updItem);
    // NOTE: no need to spread data and item
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    console.log('App ', id);
    if (window.confirm('Are You Sure you want to delete ?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
