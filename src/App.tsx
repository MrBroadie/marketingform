import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Dashboard from './components/dashboard';
import SubmittedPage from './components/submittedPage';

function App(): ReactElement {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/feedback'>Feedback form</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feedback" element={<Dashboard/>}/>
        <Route path="/thankyou" element={<SubmittedPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
