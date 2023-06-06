import React from 'react';
import landing from '@assets/images/landing-background.jpg';
import { NavLogo, NavBarGradient } from './common';

export default function UnAuthenticatedNavBar() {
  return (
    <nav
      className="bg-no-repeat bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${landing})` }}
    >
      <NavLogo />
      <button
        className="fixed top-5 right-5 rounded-lg text-sm px-5 py-1 h-8 font-medium"
        style={{ backgroundColor: '#C33A1A' }}
      >
        Sign In
      </button>
      <NavBarGradient />
    </nav>
  );
}
