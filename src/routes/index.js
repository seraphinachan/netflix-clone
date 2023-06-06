import React from 'react';
import { Landing, Login, Episode } from '@pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoute() {
  const user = null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/modal" element={<Episode />} />
      </Routes>
    </Router>
  );
}
