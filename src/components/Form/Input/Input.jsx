import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ id, onChange, value, label, type }) {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder=" "
        className="
          block
          rounded-md
          px-6
          pt-6
          pb-3
          w-full
          h-full
          text-md
          text-white
          bg-neutral-700
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
      "
      />
      <label
        className="
          absolute
          text-md
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
      "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};
