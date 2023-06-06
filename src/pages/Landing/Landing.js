import React, { useState } from 'react';
import { NavBar } from '@components';

function Landing() {
  return (
    <div className="relative h-screen">
      <NavBar />
      <div className="absolute-center">
        <h1 className="text-5xl	font-black">
          Unlimited movies, TV shows and more
        </h1>
        <h2 className="text-2xl text-center my-4">
          Watch anywhere. Cancel anytime.
        </h2>
        <h3 className="text-xl text-center">
          Ready to watch? Enter your email to create create or restart your
          membership.
        </h3>
        <div className="m-3 text-center">
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="m-3 outline-0 w-5/12 h-8 p-6 leading-6 text-slate-600"
            />
            <button className="py-3 px-5 text-base bg-red-700 border-0 cursor-pointer font-semibold">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Landing;
