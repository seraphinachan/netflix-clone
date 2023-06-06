import React from 'react';
import PropTypes from 'prop-types';
import UnAuthenticatedNavBar from './UnAuthenticatedNavBar';
import AuthenticatedNavBar from './AuthenticatedNavBar';

const NavBar = ({ isLoggedIn = false }) => {
  return (
    <>{isLoggedIn ? <AuthenticatedNavBar /> : <UnAuthenticatedNavBar />}</>
  );
};

export default NavBar;

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool,
};
