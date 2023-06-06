import { NavLogo } from './common';
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import AvatarBlue from '@assets/images/avatar-blue.png';

const NavItem = ({ label }) => {
  return (
    <div className="hover:text-gray-300 cursor-pointer transition">{label}</div>
  );
};

export default function AuthenticatedNavBar() {
  return (
    <nav className="w-full fixed z-40">
      <div
        className="
          px-4
          flex
          flex-row
          transition
          duration-500
          bg-zinc-900
          bg-opacity-90
          space-x-5
        "
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
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <AiOutlineBell />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
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
