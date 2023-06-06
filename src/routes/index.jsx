import React from 'react';
import { Landing, Home, Episode, SignIn } from '@pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/episode" element={<Episode />} />
      </Routes>
    </Router>
  );
}
