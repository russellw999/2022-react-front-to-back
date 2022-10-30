import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main>Content</main>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
