import React from 'react';
import {Landing, Login} from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;
  
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
