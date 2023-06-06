import React from 'react';
import logo from '@assets/images/logo.png';
import landing from '@assets/images/landing-background.jpg';

const LoginGradient = () => (
  <div
    className="w-full h-screen z-1"
    style={{
      background: `rgba(0, 0, 0, 0.4)`,
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)`,
    }}
  />
);

const NavBar = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <img
          className="fixed left-0 pl-5 object-contain w-40"
          src={logo}
          alt="logo"
        />
        <button
          className="fixed top-5 right-5 rounded-lg text-sm px-5 py-1 h-8 font-medium"
          style={{ backgroundColor: '#C33A1A' }}
        >
          Sign In
        </button>
        <LoginGradient />
      </div>
    </>
  );
};

export default NavBar;
