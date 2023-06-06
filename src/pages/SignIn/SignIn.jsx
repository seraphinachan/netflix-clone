import React from 'react';
import { NavBar } from '@components';

function SignIn() {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative h-screen">
      <NavBar />
      <div
        className="absolute-center "
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          width: 450,
          height: 560,
          padding: '60px 68px 40px 68px',
        }}
      >
        <form>
          <h1 className="text-3xl font-medium">Sign In</h1>
          <div className="flex flex-col mt-4 space-y-4">
            <input
              placeholder="Email or phone number"
              type="email"
              className="text-base	leading-10 h-12	p-6 outline-0 rounded-sm"
              style={{ backgroundColor: '#333' }}
            />
            <input
              placeholder="Password"
              type="password"
              className="text-base leading-10 h-12	p-6 outline-0 rounded-sm"
              style={{ backgroundColor: '#333' }}
            />
            <button
              type="submit"
              onClick={signIn}
              className="rounded text-lg font-semibold px-4 py-2 cusor-pointer"
              style={{ backgroundColor: '#C33A1A' }}
            >
              Sign In
            </button>
            <h4>
              <span className="text-stone-500">New to Netflix? </span>
              <span
                className="hover:cursor-pointer hover:underline"
                onClick={register}
              >
                Sign Up now.
              </span>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
