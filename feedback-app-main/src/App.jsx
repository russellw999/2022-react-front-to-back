import AboutPage from './components/pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, { Fragment } from 'react';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import { FeedbackProvider } from './context/FeedbackContext';

import PropTypes from 'prop-types';

const App = () => {
  return (
    <Fragment>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Fragment>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </Fragment>
                }
              ></Route>
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <AboutIconLink />
          </div>
        </Router>
      </FeedbackProvider>
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
