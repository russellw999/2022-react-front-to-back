import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className="container mx-auto px-3 pb-12">Content</main>
          <Footer />
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
