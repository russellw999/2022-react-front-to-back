import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//  Old Pre React 18 syntax
// ReactDOM.render(<h1>My App</h1>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
