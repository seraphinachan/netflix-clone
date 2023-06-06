import React from 'react';
import logo from '@assets/images/logo.png';
import PropTypes from 'prop-types';

export function NavLogo({ isLoggedIn }) {
  return (
    <img
      className={`object-contain h-12 ${!isLoggedIn && 'fixed'}`}
      src={logo}
      alt="logo"
    />
  );
}

export function NavBarGradient() {
  return (
    <div
      className="w-full h-screen z-1"
      style={{
        background: `rgba(0, 0, 0, 0.4)`,
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)`,
      }}
    />
  );
}

NavLogo.propTypes = {
  isLoggedIn: PropTypes.bool,
};
