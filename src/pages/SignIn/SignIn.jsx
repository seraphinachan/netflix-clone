import React from 'react';
import { NavBar, Input, Button } from '@components';

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
          height: 490,
          padding: '60px 68px 40px 68px',
        }}
      >
        <form>
          <h1 className="text-3xl font-medium">Sign In</h1>
          <div className="flex flex-col mt-4 space-y-4">
            <Input type="email" label="Email" id="email" />
            <Input type="password" label="Password" id="password" />
            <Button> Sign In </Button>
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
