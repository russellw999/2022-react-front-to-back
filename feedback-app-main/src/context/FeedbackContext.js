import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  // const baseUrl = `http://localhost:${serverPort}/feedback?_sort=id&_order=desc`;
  // baseUrl after defining PROXY in package.json
  const baseUrl = `/feedback?_sort=id&_order=desc`;

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
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    // add to our app level state
    const data = await response.json();
    setFeedback([data, ...feedback]);
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
