import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, onClick }) {
  return (
    <button
      className="
        w-full
        h-full
        rounded-md
        text-md
        font-semibold
        py-3
        cusor-pointer
        bg-red-700
        hover:bg-red-600
        "
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
