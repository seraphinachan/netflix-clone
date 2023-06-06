import React from 'react';
import { Landing, Login } from '@pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoute() {
  const user = null;

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      )}
    </Router>
  );
}
