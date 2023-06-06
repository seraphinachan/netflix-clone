import { NavLogo } from './common';
import PropTypes from 'prop-types';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import AvatarBlue from '@assets/images/avatar-blue.png';
import React, { useEffect, useState } from 'react';

const NavItem = ({ label }) => {
  return (
    <div className="hover:text-gray-300 cursor-pointer transition">{label}</div>
  );
};

export default function AuthenticatedNavBar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 40) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
          px-4
          flex
          flex-row
          transition
          duration-500
          bg-zinc-900
          space-x-5
          bg-opacity-${show ? '90' : '0'}
          `}
      >
        <NavLogo isLoggedIn={true} />
        <div className="flex flex-row ml-8 gap-6 self-center w-full">
          <NavItem label="Home" />
          <NavItem label="Tv Shows" />
          <NavItem label="Movies" />
          <NavItem label="New & Popular" />
          <NavItem label="My List" />
          <NavItem label="Browse By Languages" />
        </div>
        <div className="flex flex-row gap-6 ml-auto self-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition self-center">
            <AiOutlineBell />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition self-center">
            <AiOutlineSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition w-6 h-6">
            <img src={AvatarBlue} />
          </div>
        </div>
      </div>
    </nav>
  );
}

NavItem.propTypes = {
  label: PropTypes.string,
};
